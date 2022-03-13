const messages = [
  "<:Dice1:950258488142073866> <:Dice1:950258488142073866>"
];

exports.run = (client, message, args) => {
  const roll2Messages = messages[Math.floor(Math.random() * messages.length)];
  message.reply(`Rolled the dice to ${roll2Messages}`);
}

exports.name = "roll-2"
