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
    logDate: {
      type: 'date-time'
    },
    timeOn: {
      type: 'date-time'
    },
    timeOff: {
      type: 'date-time'
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
    _id: { type: String, required: false },
    archived: {
      type: 'boolean'
    },
    job: {
      type: 'string'
    },
    date: {
      type: 'date-time'
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
    customerStreet2: {
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
      type: 'date-time'
    },
    servicemanSignature: {
      type: 'string'
    },
    servicemanSignatureDate: {
      type: 'date-time'
    }
  },
  required: ['job', 'customerName']
}
