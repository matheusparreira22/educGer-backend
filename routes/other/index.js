'use strict'
const object = {
  name: 'other',
  age: 20
}

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return object
  })

  fastify.post('/post', async function (request, reply) {
    return 'this is an other post'
  })
}
