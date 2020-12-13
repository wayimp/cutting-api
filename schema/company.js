const companySchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    job: {
      type: 'number'
    },
    addr1: {
      type: 'string'
    },
    addr2: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    zip: {
      type: 'string'
    },
    formatted_address: {
      type: 'string'
    },
    country: {
      type: 'string'
    },
    active: {
      type: 'boolean'
    },
    latitude: {
      type: 'number'
    },
    longitude: {
      type: 'number'
    },
    label: {
      type: 'string'
    }
  },
  required: ['name']
}