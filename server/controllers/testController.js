const {
  Test
} = require('../models/models')
const ApiError = require('../error/ApiError')

class TestController {
  async getAll(req, res) {
    let {
      date,
      name,
      count,
      distance,
    } = req.query
    page = page || 1
    limit = limit || 10
    let offset = page * limit - limit
    let where = {}
    if (date) where.date = date
    if (name) where.name = name
    if (count) where.count = count
    if (distance) where.distance = distance
    const tests = await Room.findAll({
      where: where,
      limit,
      offset
    })
  }
}

module.exports = new TestController()