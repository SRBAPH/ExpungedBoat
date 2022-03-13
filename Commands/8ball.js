const messages = [
  "As I see it, yes",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don’t count on it",
  "It is certain",
  "It is decidedly so",
  "Most likely",
  "My reply is no",
  "My sources say no",
  "Outlook good",
  "Outlook not so good",
  "Reply hazy try again",
  "Signs point to yes",
  "Very doubtful",
  "Without a doubt",
  "Yes",
  "Yes, definitely",
  "You may rely on it"
];

exports.run = (client, message, args) => {
  const eightBallMessages = messages[Math.floor(Math.random() * messages.length)];
  message.channel.send(`${eightBallMessages}. :8ball:`);
}

exports.name = "8ball"
