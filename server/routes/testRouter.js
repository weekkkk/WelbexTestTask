const Router = require('express')
const router = new Router()
const testController = require('../controllers/testController')

router.post('/', testController.getAll)

module.exports = router