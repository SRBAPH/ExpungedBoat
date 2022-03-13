const messages = [
  "<:Dice5:950258581939290133> <:Dice6:950258598599086100>",
  "<:Dice6:950258598599086100> <:Dice5:950258581939290133>"
];

exports.run = (client, message, args) => {
  const roll11Messages = messages[Math.floor(Math.random() * messages.length)];
  message.reply(`Rolled the dice to ${roll11Messages}`);
}

exports.name = "roll-11"
