const router = require('express').Router()
const dishController = require('../controllers/dishController')

router.post('/vendors/:id/dish', dishController.addDish)
router.patch('/dish/:id',dishController.updatePrice)
router.get('/dish/:id', dishController.showDishById)


module.exports = router
