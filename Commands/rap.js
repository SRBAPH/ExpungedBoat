const Discord = require("discord.js")
const messages = [
  "“I start to think, and then I sink \nInto the paper like I was ink \nWhen I’m writing, I’m trapped in between the lines \nI escape when I finish the rhyme.” \nRakim – ‘I Know You Got Soul’",
  "“Brain cells are lit. Ideas start to hit \nNext the formation of words that fit \nAt the table I sit, making it legit \nAnd when my pen hits the paper.” \nBig Daddy Kane – ‘Ain’t No Half Steppin’‘",
  "“If skills sold, truth be told, I’d probably be \nLyrically, Talib Kweli \nTruthfully, I wanna rhyme like Common Sense \nBut I did 5 mill’ – I ain’t been rhyming like Common since.” \nJay-Z – ‘Moment of Clarity’",
  "“Here’s a murder rap to keep y’all dancin’ \nWith a crime record like Charles Manson \nAK-47 is the tool \nDon’t make me act a fool.” \nN.W.A – ‘Straight Outta Compton’",
  "“Our freedom of speech is freedom or death \nWe got to fight the powers that be \nLemme hear you say \nFight the power.” \nPublic Enemy – ‘Fight the Power’",
  "“Speak the wrong words man and you will get touched \nYou can put your whole army against my team and \nI guarantee you it’ll be your very last time breathing \nYour simple words just don’t move me, you’re minor, we’re major \nYou’re all up in the game and don’t deserve to be a player \nDon’t make me have to call your name out.” \nMobb Deep – ‘Shook Ones Part II’",
  "“You better lose yourself in the music, the moment \nYou own it, you better never let it go \nYou only get one shot, do not miss your chance to blow \nThis \nopportunity comes once in a lifetime.” \nEminem – ‘Lose Yourself’",
  "“Swimmin’ laps around a bottle of Louie the Thirteenth \nJumpin’ off of a mountain into a sea of codeine \nI’m at the top of the top, but still I climb \nAnd if I should ever fall, the ground will then turn to wine.” \nLil’ Wayne – ‘I Feel Like Dying’",
  "“Rappers stepping to me they want to get some \nBut I’m the Kane, so yo, you know the outcome \nAnother victory \nThey can’t get with me \nSo pick a BC date cause you’re history \nI’m the authentic poet to get lyrical \nFor you to beat me, it’s gonna take a miracle” \nBig Daddy Kane – ‘Ain’t No Half Steppin’",
  "“Don’t push me cause I’m close to the edge \nI’m trying not to lose my head \nIt’s like a jungle. Sometimes it makes me wonder \nHow I keep from goin’ under.” \nGrandmaster Flash & the Furious Five – ‘The Message’",
  "“I can hear sweat trickling down your cheek \nYour heartbeat sound like Sasquatch feet \nThundering, shaking the concrete.” \nNotorious B.I.G. – ‘Who Shot Ya?’",
  "“Rappers I monkey flip em with the funky rhythm I be kicking \nMusician, inflicting composition \nOf pain, Scarface sniffing \nHolding a M-16, with the pen I’m extreme, now \nBullet holes left in my peepholes \nI’m suited up in street clothes \nHand me a nine and I’ll defeat foes \nY’all know my steelo with or without the airplay.” \nNas – ‘N.Y. State of Mind’",
  "“Biggie Biggie Biggie can’t you see \nSometimes your words just hypnotize me \nAnd I just love your flashy ways \nGuess that’s why they broke, and you’re so paid (uh).” \nNotorious B.I.G. – ‘Hypnotize’",
  "“Explosions, overpowerin’ \nOver the competition I’m towerin’ \nWrecking shop when I write these lyrics \nThat’ll make you call the cops \nDon’t you dare stare, you better move \nDon’t ever compare \nMe to the rest that’ll all get sliced and diced \nCompetition’s payin’ the price.” \nLL Cool J – ‘Mama Said Knock You Out’",
  "“Don’t you call this a regular jam \nI’m gonna rock this land \nI’m gonna take this itty-bitty world by storm \nAnd I’m just gettin’ warm.” \nLL Cool J – ‘Mama Said Knock You Out’",
  "“Stronger and longer, even with the drum off \nI keep on goin’ and flowin’ just like a river \nI got a whole lot to give so I’m-a give a \nLittle at a time, new trails are blazin’ \nAction is in effect, and always stays in.” \nMarley Marl – ‘The Symphony’",
  "“I don’t like to dream about gettin’ paid \nSo I dig into the books of the rhymes that I made \nSo now’s a test to see if I got pull \nHit the studio, ’cause I’m paid in full.” \nEric B. and Rakim – ‘Paid in Full’",
  "“Poppa been smooth since days of Underroos \nNever lose, never choose to, bruise crews who \nDo something to us, talk go through us \nGirls walk to us, wanna do us, screw us \nWho us? Yeah, Poppa and Puff (hehehe) \nClose like Starsky and Hutch, stick the clutch.” \nNotorious B.I.G. – ‘Hypnotize’",
  "“Party people in the place to be, KRS-One attack \nYa got dropped off MCA cause the rhymes you wrote was wack \nSo you think that hip-hop had its start out in Queensbridge \nIf you pop that junk up in the Bronx you might not live \nCause you’re in \nSouth Bronx, the South South Bronx.” \nBoogie Down Productions – ‘South Bronx’",
  "“Now don’t you understand man universal law? \nWhat you throw out comes back to you, star \nNever underestimate those who you scar \nCause karma, karma, karma comes back to you hard! \nYou can’t hold god’s people back that long.” \nLauryn Hill – ‘Lost Ones’"
];

exports.run = (client, message, args) => {
  const rapMessages = messages[Math.floor(Math.random() * messages.length)];
  const commands = client.commands.map(command => command.name).join(", ")
  const rapEmbed = new Discord.MessageEmbed()
    .setTitle("Turn on the Beat! :microphone:")
    .setDescription(rapMessages)
    .setFooter("Imagine Rapping without Beat.")
    .setColor("#525254")

  message.reply({ embeds: [rapEmbed] })
}

exports.name = "rap"
