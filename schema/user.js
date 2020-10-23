const userSchema = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    username: { type: 'string' },
    password: { type: 'string' },
    roles: { type: 'string' },
    active: { type: 'boolean' }
  },
  required: ['username', 'password']
}