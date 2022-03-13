exports.run = (client, message, args) => {
  const personKilled = message.mentions.users.first();
  if (personKilled) {
    message.channel.send(`Yikes! ${message.author} killed ${personKilled}! :skull:`);
  }
  if (!personKilled) return message.reply("Which member would you kill bruh...")

}

exports.name = "kill"
