const { Tag, DishTag, Dish } = require('../models')

class TagController {
  static addTag (req, res) {
    const {name} = req.body
    const newTag = {
      name
    }
    Tag.create(newTag)
      .then(tag => {
        res.status(201).json({tag})
      })
      .catch(err => {
        res.status(500).json({err})
      })
  }
  static addDishTag(req, res) {
    const { DishId, TagId } = req.body
    const newDishTag = {
      DishId,
      TagId
    }
    DishTag.create(newDishTag)
      .then(dishtag => {
        res.status(201).json({dishtag})
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  static filterTag(req, res) {
    const { tags } = req.query
    Tag.findAll({
      where: {
        name: tags
      },
    })
      .then(tag => {
         return DishTag.findAll({
          where: {
            TagId : tag.id
          },
          include: [Dish]
        })
      })
      .then(dishtag => {
        res.status(200).json({search: dishtag})
      })
      .catch(err => {
        res.status(500).json(err)
      })
   
  }
}

module.exports = TagController