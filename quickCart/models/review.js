const mongoose = require('mongoose')
const Schema = mongoose.Schema
const reviewSchema = new Schema(
  {
    reviewContent: { type: String, required: true },
    reviewRating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    userName: String,
    userAvatar: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('review', reviewSchema)
