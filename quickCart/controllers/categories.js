const Category = require("../models/category")
const Item = require("../models/item")

async function index(req, res) {
  const categories = await Category.find({})
  res.render("categories/index", { title: "All categories", categories })
}

async function show(req, res) {
  const categories = await Category.findById(req.params.id)
  const items = await Item.find({})
  res.render("categories/show", { title: "Items Detail", categories, items })
}

module.exports = {
  index,
  show,
}
