'use strict'

const exampleController = require('../../controller/exampleController')

module.exports = async function (fastify, opts) {
  fastify.get('/', exampleController.getExample)
}
