'use strict'

const lots = ['大吉', '吉', '中吉', '末吉', '凶']

module.exports = (robot) => {
  robot.hear(/hello/i, (msg) => {
    const user_id = msg.message.user.id
    msg.send(`Hello, <@${user_id}>`)
  })

  robot.hear(/おみくじ/i, (msg) => {
    msg.send(lots[Math.floor(Math.random() * lots.length)])
  })
}
