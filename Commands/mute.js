exports.run = (client, message, args) => {
  if (!message.member.permissions.has("KICK_MEMBERS")) return
  message.reply("Bruh... You don't have permission to do that...")
  let role = message.guild.roles.cache.find(role => role.name === "muted")
  let member = message.mentions.members.first()
  let reason = message.content.split(" ").slice(2).join(" ")
  if (!reason) reason = "No reason specified."
  if (!role) return message.reply("How could I mute members without a mute role idiot?")
  if (!member) return message.reply("Which member should I mute? You? LOL!")
  if (member.roles.cache.has(role.id)) return message.reply("How could I gonna mute a member that is already muted?")
  member.roles.add(role)
    .then(() => {
      message.reply(`**Succesfully muted:** ${member}. \n**Reason:** ${reason} \nNow ${member} will not able to chat in the Server... Sad...`)
    })
    .catch(() => {
      message.reply("Oops... Somethin' went wrong...")
    })
}

exports.name = "mute"
