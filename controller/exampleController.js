'use strict'

const exampleService = require('../service/exampleService')

async function getExample(request, reply) {
  const message = await exampleService.getExampleMessage()
  return reply.send(message)
}

module.exports = {
  getExample
}
