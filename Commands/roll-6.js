const messages = [
  "<:Dice1:950258488142073866> <:Dice5:950258581939290133>",
  "<:Dice5:950258581939290133> <:Dice1:950258488142073866>",
  "<:Dice2:950258543905349712> <:Dice4:950258568802758728>",
  "<:Dice4:950258568802758728> <:Dice2:950258543905349712>",
  "<:Dice3:950258556781879346> <:Dice3:950258556781879346>"
];

exports.run = (client, message, args) => {
  const roll6Messages = messages[Math.floor(Math.random() * messages.length)];
  message.reply(`Rolled the dice to ${roll6Messages}`);
}

exports.name = "roll-6"
