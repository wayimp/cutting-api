const userSchema = require('../schema/user')

const login = {
  schema: {
    response: {
      body: {
        username: { type: 'string' },
        password: { type: 'string' }
      }
    }
  }
}

const single = {
  schema: {
    response: {
      200: { userSchema }
    }
  }
}

const multiple = {
  200: {
    description: 'list of users',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        result: { userSchema }
      }
    }
  }
}

async function routes (fastify, options) {
  const usersCollection = fastify.mongo.db.collection('users')

  fastify.post('/token', login, async function (request, reply) {
    const username =
      request.body && request.body.username ? request.body.username : ''
    const password =
      request.body && request.body.password ? request.body.password : ''

    const result = await usersCollection.find({ username: username }).toArray()

    const user = result[0]
    let token = ''

    if (user.password === password) {
      delete user.password
      token = await reply.jwtSign(user)
    }

    return { access_token: token }
  })
}
module.exports = routes
