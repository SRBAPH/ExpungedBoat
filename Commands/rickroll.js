exports.run = (client, message, args) => {
  const personRickrolled = message.mentions.users.first();
  if (personRickrolled) {
    message.channel.send(`${personRickrolled} just got rickrolled by ${message.author}... LMAO!`);
    message.channel.send("https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif")
  }
  if (!personRickrolled) return message.reply("LOL! Mention Someone to rickroll...")
}

exports.name = "rickroll"
