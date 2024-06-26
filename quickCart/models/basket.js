const mongoose = require('mongoose')
const Schema = mongoose.Schema
const basketSchema = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: 'item' }],
    totalPrice: Number
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Basket', basketSchema)
