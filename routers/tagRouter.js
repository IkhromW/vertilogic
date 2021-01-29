const router = require('express').Router()
const TagController = require('../controllers/tagController')

router.post('/tag', TagController.addTag)
router.post('/dishtag', TagController.addDishTag)
router.get('/filter', TagController.filterTag)

module.exports = router
