import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  news: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default mongoose.model('news', orderSchema)
