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
  number: {
    type: Number,
    required: [true, '缺少人數']
  },
  state: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default mongoose.model('waits', waitsSchema)
