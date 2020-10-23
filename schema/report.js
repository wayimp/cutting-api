const materialSchema = {
  type: 'object',
  properties: {
    quantity: {
      type: 'number'
    },
    type: {
      type: 'string'
    },
    item: {
      type: 'string'
    },
    description: {
      type: 'string'
    }
  },
  required: ['item']
}

const issueSchema = {
  type: 'object',
  properties: {
    description: {
      type: 'string'
    },
    resolved: {
      type: 'boolean'
    }
  },
  required: ['description']
}

const logSchema = {
  type: 'object',
  properties: {
    date: {
      type: 'string'
    },
    on: {
      type: 'string'
    },
    off: {
      type: 'string'
    },
    mileage: {
      type: 'number'
    },
    hours: {
      type: 'number'
    },
    lodging: {
      type: 'boolean'
    },
    toll: {
      type: 'boolean'
    }
  }
}

const reportSchema = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    job: {
      type: 'string'
    },
    date: {
      type: 'string'
    },
    po: {
      type: 'string'
    },
    customerName: {
      type: 'string'
    },
    customerStreet: {
      type: 'string'
    },
    customerCity: {
      type: 'string'
    },
    customerState: {
      type: 'string'
    },
    customerZip: {
      type: 'string'
    },
    customerPhone: {
      type: 'string'
    },
    machineType: {
      type: 'string'
    },
    machineSerial: {
      type: 'string'
    },
    control: {
      type: 'string'
    },
    controlSerial: {
      type: 'string'
    },
    plasmaType: {
      type: 'string'
    },
    plasmaModel: {
      type: 'string'
    },
    plasmaSerial: {
      type: 'string'
    },
    oxyFuel: {
      type: 'boolean'
    },
    torches: {
      type: 'number'
    },
    drive: {
      type: 'string'
    },
    driveSerial: {
      type: 'string'
    },
    reportedTrouble: {
      type: 'string'
    },
    materials: {
      type: 'array',
      items: {
        materialSchema
      }
    },
    servicePerformed: {
      type: 'string'
    },
    issues: {
      type: 'array',
      items: {
        issueSchema
      }
    },
    logs: {
      type: 'array',
      items: {
        logSchema
      }
    },
    completed: {
      type: 'boolean'
    },
    satifaction: {
      type: 'boolean'
    },
    customerSignature: {
      type: 'string'
    },
    customerSignatureDate: {
      type: 'string'
    },
    servicemanSignature: {
      type: 'string'
    },
    servicemanSignatureDate: {
      type: 'string'
    }
  },
  required: ['job', 'customerName']
}