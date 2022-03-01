import linebot from 'linebot'
import dotenv from 'dotenv'

dotenv.config()
const bot = linebot({
  channelId: process.env.CHANNEL_ID_BOT,
  channelSecret: process.env.CHANNEL_SECRET_BOT,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN_BOT
})

export default bot
