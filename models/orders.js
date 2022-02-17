import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users'
  },
  products: {
    type: [
      {
        product: {
          type: mongoose.ObjectId,
          ref: 'products',
          required: [true, '缺少商品 ID']
        },
        quantity: {
          type: Number,
          required: [true, '缺少商品數量']
        }
      }
    ]
  },
  state: {
    type: Boolean,
    default: 'false'
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false })

export default mongoose.model('orders', orderSchema)
