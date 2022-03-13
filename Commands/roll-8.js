const messages = [
  "<:Dice2:950258543905349712> <:Dice6:950258598599086100>",
  "<:Dice6:950258598599086100> <:Dice2:950258543905349712>",
  "<:Dice3:950258556781879346> <:Dice5:950258581939290133>",
  "<:Dice5:950258581939290133> <:Dice3:950258556781879346>",
  "<:Dice4:950258568802758728> <:Dice4:950258568802758728>"
];

exports.run = (client, message, args) => {
  const roll8Messages = messages[Math.floor(Math.random() * messages.length)];
  message.reply(`Rolled the dice to ${roll8Messages}`);
}

exports.name = "roll-8"
