//Main Identifiers
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
  allowedMentions: ["users"]
});

//Clients Activity
client.on("ready", () => {
  console.log("Client has Logged on!");
  client.user.setActivity(`ez help with ${client.guilds.cache.size} Server(s)`);
})

//Unprefixed Commands
client.on("message", message => {
  if (message.content === "YES") {
    message.reply("NO")
  }
})

client.on("message", message => {
  if (message.content === "<@!891196257564000276>") {
    message.delete(1000)
    message.channel.send(`Not this Time ${message.author}... You will not ping __Owners__ bruh...`)
  }
})

client.on("message", message => {
  if (message.content === "<@!830998388170424370>") {
    message.delete(1000)
    message.channel.send(`LOL! You will not ping __Co-Owners__ ${message.author}...`)
  }
})

//Commands Handler
const fs = require("fs")
const prefix = "ez "

client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for (file of commands) {
  const commandsName = file.split(".")[0]
  const command = require(`./Commands/${commandsName}`)
  client.commands.set(commandsName, command)
}

client.on("messageCreate", message => {
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandsName = args.shift()
    const command = client.commands.get(commandsName)
    if (!command) return
    command.run(client, message, args)
  }
})

//Join and Left Message
client.on("guildMemberAdd", async member => {
  console.log("1 Member has joined to the **Expunged Sea**")
  if (member.guild.id !== "945629298688163900") return;
  const welcomeEmbed = new Discord.MessageEmbed()
    .setTitle(`Welcome to __**Expunged Sea**__ ${member}!`)
    .setDescription(`Welcome to the party ${member}! To get access to the Server, go to <#945634215540690944>. If verification doesn't work, DM a staff member in <#948081850893606972>. Then go to <#945629611633565756> for Server rules.`)
    .setThumbnail("https://pngimg.com/uploads/welcome/welcome_PNG34.png")
    .setFooter("New member has joined the party")
    .setImage("")

  message.channel.send({ embeds: [welcomeEmbed] });
})

//Website Handler
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Client is ready!");
})

app.get("/", (req, res) => {
  res.send(`Playing with ${client.guilds.cache.size} Servers`);
})

//Clients Login
client.login(config.token)
