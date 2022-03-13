const messages = [
  "<:Dice3:950258556781879346> <:Dice6:950258598599086100>",
  "<:Dice6:950258598599086100> <:Dice3:950258556781879346>",
  "<:Dice4:950258568802758728> <:Dice5:950258581939290133>",
  "<:Dice5:950258581939290133> <:Dice4:950258568802758728>"
];

exports.run = (client, message, args) => {
  const roll9Messages = messages[Math.floor(Math.random() * messages.length)];
  message.reply(`Rolled the dice to ${roll9Messages}`);
}

exports.name = "roll-9"
