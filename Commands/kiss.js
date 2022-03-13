exports.run = (client, message, args) => {
  const personKissed = message.mentions.users.first();
  if (personKissed) {
    message.channel.send(`${message.author} kissed ${personKissed}! Ewww!`);
  }
  if (!personKissed) return message.reply("Provide a user that you would kiss bruh...")

}

exports.name = "kiss"
