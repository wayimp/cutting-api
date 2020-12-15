const plasmaSchema = {
  type: 'object',
  properties: {
    plasmaType: {
      type: 'string'
    },
    plasmaModel: {
      type: 'string'
    },
    plasmaSerial: {
      type: 'string'
    },
    gasConsoleSerial: {
      type: 'string'
    },
    gasConsoleManufactureDate: {
      type: 'date'
    }
  }
}

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

const tsheetSchema = {
  type: 'object',
  properties: {
    date: {
      type: 'date-time'
    },
    start: {
      type: 'date-time'
    },
    end: {
      type: 'date-time'
    },
    duration: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    notes: {
      type: 'string'
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
    machinePowerSupply: {
      type: 'string'
    },
    machineManufactureDate: {
      type: 'date'
    },
    torchHeightControlModel: {
      type: 'string'
    },
    torchHeightControlSerial: {
      type: 'string'
    },
    driveModel: {
      type: 'string'
    },
    driveSerial: {
      type: 'string'
    },
    positionerSerial: {
      type: 'string'
    },
    interfaceSerial: {
      type: 'string'
    },
    oxyFuel: {
      type: 'boolean'
    },
    torches: {
      type: 'number'
    },
    plasmas: {
      type: 'array',
      items: {
        plasmaSchema
      }
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
    tsheets: {
      type: 'array',
      items: {
        tsheetSchema
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
