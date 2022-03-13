const messages = [
  "<:Dice1:950258488142073866> <:Dice3:950258556781879346>",
  "<:Dice3:950258556781879346> <:Dice1:950258488142073866>",
  "<:Dice2:950258543905349712> <:Dice2:950258543905349712>"
];

exports.run = (client, message, args) => {
  const roll4Messages = messages[Math.floor(Math.random() * messages.length)];
  message.reply(`Rolled the dice to ${roll4Messages}`);
}

exports.name = "roll-4"
