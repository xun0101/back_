import mongoose from 'mongoose' // MongoDB 操作套件
// import validator from 'validator' // 驗證套件
import md5 from 'md5' // 加密套件

const Schema = mongoose.Schema

const UserSchema = new Schema({
  account: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  role: {
    // 0 一般會員
    // 1 管理員
    type: Number,
    // 預設為一般會員
    default: 0,
    required: [true, '沒有使用者分類']
  },
  tokens: {
    type: [String]
  },
  // 大頭貼
  avatar: {
    type: String
  },
  // LINE ID
  line: {
    type: String
  },
  // LINE 名字
  name: {
    type: String
  },
  cart: {
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
  }
}, { versionKey: false })

// md5 加密使用者送出的密碼
UserSchema.pre('save', function (next) {
  const user = this
  if (user.isModified('password')) {
    if (user.password.length >= 5 && user.password.length <= 20) {
      user.password = md5(user.password)
    } else {
      const error = new mongoose.Error.ValidationError(null)
      error.addError('password', new mongoose.Error.ValidatorError({ message: '密碼長度錯誤' }))
      next(error)
      return
    }
  }
  next()
})

export default mongoose.model('users', UserSchema)
