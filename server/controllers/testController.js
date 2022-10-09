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
    } = req.body
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
    page = Number(page) || 1
    limit = Number(limit) || 10
    let where = {}
    if (date) where.date = date
    if (name) where.name = name
    if (count) where.count = count
    if (distance) where.distance = distance
    const offset = page * limit - limit
    const all = await Test.findAll()
    const length = all?.length
    const tests = await Test.findAll({
      where: {},
      limit,
      offset
    })
    return res.json({
      tests,
      page,
      limit,
      offset,
      length
    })
  }
}

module.exports = new TestController()