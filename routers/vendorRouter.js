const router = require('express').Router()
const vendorController = require('../controllers/vendorController')

router.get('/vendors', vendorController.getAllVendors)
router.post('/vendors', vendorController.addVendor)
router.put('/vendors/:id', vendorController.updateVendor)
router.delete('/vendors/:id', vendorController.deleteVendor)
router.get('/vendors/:id', vendorController.showVendorById)

module.exports = router