const itemSchema = {
  type: 'object',
  properties: {
    _id: { type: String, required: false },
    'Active Status': { type: 'string' },
    Type: { type: 'string' },
    Item: { type: 'string' },
    Description: { type: 'string' },
    'Sales Tax Code': { type: 'string' },
    Account: { type: 'string' },
    'COGS Account': { type: 'string' },
    'Asset Account': { type: 'string' },
    'Accumulated Depreciation': { type: 'number' },
    'Purchase Description': { type: 'number' },
    'Quantity On Hand': { type: 'number' },
    Cost: { type: 'number' },
    'Preferred Vendor': { type: 'number' },
    Price: { type: 'number' },
    'Reorder Pt (Min)': { type: 'number' }
  },
  required: ['Item', 'Description']
}
