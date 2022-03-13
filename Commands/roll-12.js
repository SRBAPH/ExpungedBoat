const messages = [
  "<:Dice6:950258598599086100> <:Dice6:950258598599086100>"
];

exports.run = (client, message, args) => {
  const roll12Messages = messages[Math.floor(Math.random() * messages.length)];
  message.reply(`Rolled the dice to ${roll12Messages}`);
}

exports.name = "roll-12"
