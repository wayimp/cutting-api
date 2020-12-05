const companySchema = require('../schema/company')
const { ObjectId } = require('mongodb')
const { refreshCompanies } = require('../refreshCompanies')

const updateOne = {
  body: {
    companySchema
  }
}

const single = {
  schema: {
    response: {
      200: { companySchema }
    }
  }
}

const multiple = {
  200: {
    description: 'list of companies',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        result: { companySchema }
      }
    }
  }
}

async function routes (fastify, options) {
  const companiesCollection = fastify.mongo.db.collection('companies')

  fastify.get('/companies', multiple, async (request, reply) => {
    try {
      await request.jwtVerify()

      const result = companiesCollection
        .find({ active: true })
        .sort({ roles: 1 })
        .toArray()

      return result
    } catch (err) {
      reply.send(err)
    }
  })

  fastify.post('/companies', { schema: updateOne }, async function (
    request,
    reply
  ) {
    await request.jwtVerify()

    const created = await companiesCollection.insertOne(request.body)
    created.id = created.ops[0]._id

    return created
  })

  fastify.delete('/companies', {}, async function (request, reply) {
    try {
      await request.jwtVerify()

      await companiesCollection.deleteMany({})

      await refreshCompanies(companiesCollection)

      return 0
    } catch (err) {
      reply.send(err)
    }
  })
}
module.exports = routes
