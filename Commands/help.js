const { MessageEmbed } = require("discord.js");
module.exports = {
  run: async (client, message, args) => {
    let avatarOptions = {
      format: 'png',
      dynamic: true,
      size: 1024
    }

    const helpEmbed = new MessageEmbed()
      .setTitle("Thanks for using me Jerk!")
      .setDescription("Type `ez!help-commands` for commands.")
      .addField("🤖-Bot Infos-🤖", `<:ReplyCont:946235031456739348>Servers: ${client.guilds.cache.size} \n<:ReplyCont:946235031456739348>Invite Link: https://bit.ly/3Iz8IPW \n<:ReplyCont:946235031456739348>Top.gg: \n<:Reply:945517770378989629>Main Server: https://bit.ly/3prvaCP`)
      .addField("👨-Staff-👨", "<:ReplyCont:946235031456739348>Coder: SRBA PH (Dev) \n<:ReplyCont:946235031456739348>Tester: ErrolJohnPlays \n<:Reply:945517770378989629>Uploaded by: Angel Grace Gaming")
      .addField("❣️-Special Thanks to-❣️", "<:ReplyCont:946235031456739348>Script Teacher: Imagine Gaming Play \n<:Reply:945517770378989629>Supporter: TheLastYX")
      .setFooter("Bot Infos")
      .setTimestamp()
      .setColor("525254")
      .setThumbnail("https://media.discordapp.net/attachments/945142334222401536/948479751373324298/ExpungedBoat_Discord-Bot.png?width=473&height=473")

    if (message.guild) {
      message.reply({ content: "Check your DMs for help punk..." });
      message.author.send({ embeds: [helpEmbed] });
    } else {
      message.author.send({ embeds: [helpEmbed] })
    }
  },
};

exports.name = "help"
