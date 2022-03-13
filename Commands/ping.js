const Discord = require("discord.js")
exports.run = (client, message, args) => {
  const commands = client.commands.map(command => command.name).join(", ")
  const pingEmbed = new Discord.MessageEmbed()
    .setTitle("Pong!")
    .addField("Latency:", `<:Reply:945517770378989629>${message.createdTimestamp - message.createdTimestamp}ms`, true)
    .addField("API Latency:", `<:Reply:945517770378989629>${Math.round(client.ws.ping)}ms`, true)
    .setFooter("Bots Latency", "http://icons.iconarchive.com/icons/google/noto-emoji-activities/1024/52744-ping-pong-icon.png")
    .setColor("525254")
    .setThumbnail("http://icons.iconarchive.com/icons/google/noto-emoji-activities/1024/52744-ping-pong-icon.png")
  message.reply({ embeds: [pingEmbed] })
}

exports.name = "ping"
