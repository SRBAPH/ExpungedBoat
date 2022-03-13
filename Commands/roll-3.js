const messages = [
  "<:Dice1:950258488142073866> <:Dice2:950258543905349712>",
  "<:Dice2:950258543905349712> <:Dice1:950258488142073866>"
];

exports.run = (client, message, args) => {
  const roll3Messages = messages[Math.floor(Math.random() * messages.length)];
  message.reply(`Rolled the dice to ${roll3Messages}`);
}

exports.name = "roll-3"
