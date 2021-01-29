const { Vendor, Dish } = require('../models')

class vendorController {

  static getAllVendors(req, res) {
    Vendor.findAll()
      .then(data => {
        const vendors = data
        res.status(200).json({vendors})
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static addVendor(req, res) {

    const {name, phone_number, address, email} = req.body
    const newVendor = {
      name,
      phone_number,
      address,
      email
    }
    Vendor.create(newVendor)
      .then(data => {
        res.status(201).json({vendor: data})
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  static updateVendor(req, res) {
    const {id} = req.params
    const {name, phone_number, address, email} = req.body
    const updateVendor = {
      name,
      phone_number,
      address,
      email
    }
    Vendor.update(updateVendor, {
      where: {
        id: id
      },
      returning: true
    })
    .then(vendor => {
      res.status(200).json({
        name: vendor[1][0].name,
        email: vendor[1][0].email,
        phone_number: vendor[1][0].phone_number,
        address: vendor[1][0].address
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
  static deleteVendor(req, res) {
    const {id} = req.params
    Vendor.destroy({
      where: {
        id: id
      }
    })
    .then(() => {
      res.status(200).json({message: 'vendor has been successfully deleted'})
    })
    .catch((err => {
      res.status(500).json(err)
    }))
  }
  static showVendorById(req, res) {
    const { id } = req.params
    Vendor.findOne({
      where: {
        id: id
      },
      include: Dish
    })
      .then(vendor => {
        res.status(200).json({vendor})
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}
module.exports = vendorController