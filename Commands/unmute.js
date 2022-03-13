exports.run = (client, message, args) => {
  if (!message.member.permissions.has("KICK_MEMBERS")) return
  message.reply("Bruh... You don't have permission to do that...")
  let role = message.guild.roles.cache.find(role => role.name === "muted")
  let member = message.mentions.members.first()
  let reason = message.content.split(" ").slice(2).join(" ")
  if (!reason) reason = "No reason specified!"
  if (!role) return message.reply("How could I unmute members without a mute role idiot?")
  if (!member) return message.reply("Which member should I unmute jerk?")
  if (!member.roles.cache.has(role.id)) return message.reply("How could I gonna unmute a member that is already unmuted?")
  member.roles.remove(role)
    .then(() => {
      message.reply(`**Sucessfully unmuted**: ${member} \n**Reason**: ${reason} \n${member} will now be able to chat again in the Server!`)
    })
    .catch(() => {
      message.reply("Oops... Somethin' went wrong...")
    })
}

exports.name = "unmute"
