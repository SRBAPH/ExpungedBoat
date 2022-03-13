exports.run = (client, message, args) => {
  const personHugged = message.mentions.users.first();
  if (personHugged) {
    message.channel.send(`${message.author} hugged ${personHugged}! What a nice friend...`);
  }
  if (!personHugged) return message.reply("Which member would you hug? Yourself? LOL!")

}

exports.name = "hug"
