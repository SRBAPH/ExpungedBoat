const messages = [
  "How many telemarketers does it take to change a light bulb? Only one, but he has to do it while you are eating dinner.",
  "How many narcissists does it take to screw in a light bulb? One. The narcissist holds the light bulb while the rest of the world revolves around him.",
  "How many DIY buffs does it take to change a light bulb? One, but it takes two weeks and four trips to the hardware store.",
  "How many paranoids does it take to change a light bulb? Who wants to know?",
  "I read that by law you must turn on your headlights when it’s raining in Sweden, but how am I supposed to know when it is raining in Sweden?",
  "I was addicted to hokey pokey...but I turned myself around.",
  "I don’t trust stairs. They are always up to something.",
  "I remember as a kid, my dad got fired from his job as a road worker for theft. I refused to believe he could do such a thing, but when I got home, the signs were all there.",
  "Why didn't Han Solo enjoy his steak dinner? It was Chewie.",
  "Why don't pirates take a bath before they walk the plank? They just wash up on shore.",
  "Why do you never see elephants hiding in trees? Because they’re so good at it.",
  "Did you hear about the racing snail who got rid of his shell? He thought it would make him faster, but it just made him sluggish.",
  "A turtle is crossing the road when he’s mugged by two snails. When the police ask him what happened, the shaken turtle replies, “I don’t know. It all happened so fast.”",
  "Did you hear about the guy who froze to death at the drive-in? He went to see *Closed for the Winter*.",
  "Did you hear about the guy who froze to death at the drive-in? He went to see Closed for the Winter.",
  "When does a joke become a “dad joke?” When it becomes apparent.",
  `"Knock, knock." "Who's there?" "Nobel." "Nobel who?" "No­bel, so I knock knocked."`,
  `“Knock, knock.” “Who's there?" "Alabama." "Anybody with you?" "Nope. I'm Alabama self."`,
  `I startled my next-door neighbor with my new electric power tool. I had to calm him down by saying “Don’t worry, this is just a drill!”`,
  `What did one pirate say to the other when he beat him at chess? Checkmatey.`,
  ` I burned 2000 calories today, I left my food in the oven for too long.`,
  `I broke my arm in two places. My doctor told me to stop going to those places.`,
  `I quit my job at the coffee shop the other day. It was just the same old grind over and over.`,
  `I never buy anything that has Velcro with it, it’s a total rip-off.`,
  `I used to work at a soft drink can crushing company, it was soda pressing.`,
  `What is the most groundbreaking invention of all time? The shovel.`,
  `I’m starting my new job at a restaurant next week. I can’t wait.`,
  `I visited a weight loss website, they told me I have to have cookies disabled.`,
  `Did you hear about the famous Italian chef that recently died? He pasta way.`,
  `I could never be a plumber, it’s too hard watching your life’s work go down the drain.`
];

exports.run = (client, message, args) => {
  const dadjokeMessages = messages[Math.floor(Math.random() * messages.length)];
  message.reply(`${dadjokeMessages} <:Troll_Dad:950578753321463849>`);
}

exports.name = "dadjoke"
