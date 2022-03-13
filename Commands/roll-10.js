const messages = [
  "<:Dice4:950258568802758728> <:Dice6:950258598599086100>",
  "<:Dice6:950258598599086100> <:Dice4:950258568802758728>",
  "<:Dice5:950258581939290133> <:Dice5:950258581939290133>"
];

exports.run = (client, message, args) => {
  const roll10Messages = messages[Math.floor(Math.random() * messages.length)];
  message.reply(`Rolled the dice to ${roll10Messages}`);
}

exports.name = "roll-10"
