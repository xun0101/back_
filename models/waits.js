import mongoose from 'mongoose'

const waitsSchema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users'
  },
  wait: {
    type: Boolean,
    default: false
  },
  finish: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default mongoose.model('waits', waitsSchema)
