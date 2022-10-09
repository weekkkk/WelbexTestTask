const {
  Test
} = require('../models/models')
const ApiError = require('../error/ApiError')

class TestController {
  async create(req, res) {
    let {
      name,
      count,
      distance
    } = req.body.params
    const date = new Date()
    const test = await Test.create({
      date,
      name,
      count,
      distance,
    })
    return res.json(test)
  }
  async getAll(req, res) {
    let {
      date,
      name,
      count,
      distance,
      page,
      limit
    } = req.query
    page = page || 1
    limit = limit || 10
    let where = {}
    if (date) where.date = date
    if (name) where.name = name
    if (count) where.count = count
    if (distance) where.distance = distance
    const offset = page * limit - limit
    const tests = await Test.findAll({
      where: {},
      limit,
      offset
    })
    return res.json(tests)
  }
}

module.exports = new TestController()