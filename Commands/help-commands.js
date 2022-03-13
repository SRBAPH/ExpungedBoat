const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const commands = client.commands.map(command => command.name).join(", ")
  const helpCmdsEmbed = new Discord.MessageEmbed()
    .setTitle("")

  message.reply({ embeds: [helpCmdsEmbed] });
}

exports.name = "help-commands"
