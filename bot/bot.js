import linebot from 'linebot'
import dotenv from 'dotenv'

dotenv.config()
const bot = linebot({
  channelId: process.env.CHANNEL_ID_BOT,
  channelSecret: process.env.CHANNEL_SECRET_BOT,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN_BOT
})

// bot.on('message', event => {
//   console.log(event)

//   if (event.type === 'message') {
//     try {
//       if (event.message.type === 'text') {
//         event.reply('感謝您的等候，當有空位時我們會盡快通知您').then(
//           setTimeout(function () {
//             bot.push(event.source.userId, '感謝您的耐心等候，現在已有空位，歡迎您的蒞臨')
//           }, 60000)
//         )
//       }
//     } catch (error) {
//       console.log()
//     }
//   }
// })

export default bot
