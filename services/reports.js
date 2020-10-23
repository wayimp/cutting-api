const reportSchema = require('../schema/report')
const axios = require('axios')
const moment = require('moment-timezone')
const dateFormat = 'YYYY-MM-DDTHH:mm:SS'
const { ObjectId } = require('mongodb')
const { validate, email, slack } = require('../notify')

const updateOne = {
  body: {
    reportSchema
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
      200: { reportSchema }
    }
  }
}

const multiple = {
  200: {
    description: 'reports',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        result: { reportSchema }
      }
    }
  }
}

async function routes (fastify, options) {
  const reportsCollection = fastify.mongo.db.collection('reports')
  const jwt = fastify.jwt

  fastify.post('/reports', { schema: updateOne }, async function (
    request,
    reply
  ) {
    /*
    if (request.headers && request.headers.authorization) {
      await request.jwtVerify()
    }
*/
    //let report = Object.assign(request.body)

    const created = await reportsCollection.insertOne(request.body)
    const id = created.ops[0]._id

    const customerEmail = created.ops[0].email
    if (validate(customerEmail)) {
      email(customerEmail, 'Report Details', link)
    }

    return created
  })

  fastify.patch('/reports', { schema: updateOne }, async function (
    request,
    reply
  ) {
    const { body } = request
    const id = body._id
    delete body._id

    const updated = await reportsCollection.updateOne(
      {
        _id: ObjectId(id)
      },
      { $set: body },
      { upsert: true }
    )

    return updated
  })

  fastify.get('/reports/:id', multiple, async (request, reply) => {
    const result = await reportsCollection.findOne({
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

  fastify.get('/reports', multiple, async (request, reply) => {
    try {
      await request.jwtVerify()

      const user = request.user

      const result = reportsCollection
        .find({}).sort([['date', -1]])
        .toArray()

      return result
    } catch (err) {
      reply.send(err)
    }
  })

  fastify.delete(
    '/reports/:id',
    { schema: deleteOne },
    async (request, reply) => {
      const {
        params: { id }
      } = request
      //await request.jwtVerify()
      const result = await reportsCollection.deleteOne({ _id: ObjectId(id) })
      return result
    }
  )
}

module.exports = routes