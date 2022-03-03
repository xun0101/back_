import bot from '../bot/bot.js'
import users from '../models/users.js'
import waits from '../models/waits.js'

export const addwait = async (req, res) => {
  try {
    const result = await waits.create({ ...req.body, user: req.user })
    console.log(result)
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(400).send({ success: false, message: error.errors[key].message })
    } else {
      console.log(error)
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const getAllwaits = async (req, res) => {
  try {
    const result = await waits.find().sort({ date: -1 }).limit(5).populate('user')
    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const finishwait = async (req, res) => {
  const data = {
    state: req.body.state
  }
  try {
    const result = await waits.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true })
    res.status(200).send({ success: true, message: '', result })
    const user = await users.findById(result.user)
    const date = result.date.getMinutes().toString().padStart(2, '0') + result.date.getSeconds().toString().padStart(2, '0')
    bot.push(user.line, `候位編號${date}號，您的位子已安排，保留時間為15分鐘。`)
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到' })
    } else if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      res.status(400).send({ success: false, message: error.errors[key].message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}
