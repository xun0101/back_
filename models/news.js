import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  new: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default mongoose.model('news', orderSchema)
