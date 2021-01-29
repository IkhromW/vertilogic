const router = require('express').Router()
const vendorRouter = require('./vendorRouter')
const dishRouter = require('./dishRouter')
const userRouter = require('./userRouter')
const tagRouter = require('./tagRouter')

router.use(vendorRouter)
router.use(dishRouter)
router.use(userRouter)
router.use(tagRouter)

module.exports = router