const { Dish } = require('../models')

class dishController {
  static addDish(req, res) {
    const { id } = req.params
    const { name, price } = req.body

    const newDish = {
      name,
      price,
      VendorId: id
    }
    Dish.create(newDish)
      .then(dish =>{
        res.status(201).json({dish})
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  static updatePrice(req, res) {
      const { id } = req.params
      const { price } = req.body

      const updatePriceDish = {
        price
      }
      Dish.update(updatePriceDish, {
        where: {
          id: id
        },
        returning: true
      })
      .then(dish => {
        res.status(200).json({
          name: dish[1][0].name,
          price: dish[1][0].price
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  static deleteDish(req, res){
    const { id } = req.params
    Dish.destroy({
      where: {
        id: id
      }
    })
      .then(() => {
        res.status(200).json({message: 'vendor has been successfully deleted' })
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }
  static showDishById(req, res) {
    const { id } = req.params
    Dish.findOne({
      where: {
        id: id
      }
    })
    .then(dish => {
      res.status(200).json({dish})
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }
}
module.exports = dishController