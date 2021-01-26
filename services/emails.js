const emailSchema = require('../schema/email')
const moment = require('moment-timezone')
const dateFormat = 'YYYY-MM-DDTHH:mm:SS'
const { ObjectId } = require('mongodb')
const { validate, email } = require('../notify')

const updateOne = {
  email: {
    emailSchema
  }
}

const deleteOne = {
  response: {
    200: {}
  }
}

const single = {
  schema: {
    response: {
      200: { emailSchema }
    }
  }
}

const multiple = {
  200: {
    description: 'emails',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        result: { emailSchema }
      }
    }
  }
}

async function routes (fastify, options) {
  const emailsCollection = fastify.mongo.db.collection('emails')
  const jwt = fastify.jwt

  fastify.get('/sent/:reportId', multiple, async (request, reply) => {
    const { reportId } = request.params
    const result = emailsCollection.find({reportId}).toArray()
    return result
  })

  fastify.get('/emails/:id', multiple, async (request, reply) => {
    const result = await emailsCollection.findOne({
      _id: ObjectId(request.params.id)
    })

    if (!result) {
      const err = new Error()
      err.statusCode = 400
      err.message = `id: ${id}.`
      throw err
    }

    return result
  })

  fastify.get('/emails', multiple, async (request, reply) => {
    try {
      await request.jwtVerify()

      const result = emailsCollection.find({}).toArray()

      return result
    } catch (err) {
      reply.send(err)
    }
  })

  fastify.post('/emails', { schema: updateOne }, async function (
    request,
    reply
  ) {
    const { action, to, subject, body, reportId } = request.body

    const created = await emailsCollection.insertOne({
      action,
      to,
      subject,
      body,
      reportId,
      sent: new Date()
    })
    created.id = created.ops[0]._id

    email(to, subject, body)

    return created
  })

  fastify.delete(
    '/emails/:id',
    { schema: deleteOne },
    async (request, reply) => {
      const {
        params: { id }
      } = request
      await request.jwtVerify()
      const result = await emailsCollection.deleteOne({ _id: ObjectId(id) })
      return result
    }
  )
}

module.exports = routes
