exports.run = (client, message, args) => {
  let toSay = args.join(" ")
  if (!toSay) return message.reply({ content: "LOL! You have to provide something!" })
  message.channel.send({ content: toSay })
}

exports.name = "say"
