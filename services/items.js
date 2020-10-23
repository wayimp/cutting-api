const itemSchema = require('../schema/item')

const single = {
  schema: {
    response: {
      200: { itemSchema }
    }
  }
}

const multiple = {
  200: {
    description: 'list of items',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        result: { itemSchema }
      }
    }
  }
}

async function routes (fastify, options) {
  const itemsCollection = fastify.mongo.db.collection('items')

  fastify.get('/items', multiple, async (request, reply) => {
    try {
      const result = itemsCollection
        .find({
          'Active Status': 'Active',
          Type: { $ne: null },
          Item: { $ne: null },
          Description: { $ne: null }
        })
        .project({ Type: 1, Item: 1, Description: 1 })
        .sort([
          ['Type', 1],
          ['Description', 1]
        ])
        .toArray()

      return result
    } catch (err) {
      reply.send(err)
    }
  })
}

module.exports = routes
