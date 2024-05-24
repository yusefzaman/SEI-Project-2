const mongoose = require("mongoose")
const Schema = mongoose.Schema
const categorySchema = new Schema(
  {
    categoryName: String,
    categoryImg: String,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("category", categorySchema)
