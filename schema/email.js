const emailSchema = {
  type: 'object',
  properties: {
    _id: { type: String, required: false },
    to: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    sent: { type: 'date', required: false },
    reportId: { type: String, required: false }
  }
}
