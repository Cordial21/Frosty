exports.run = (client, message) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  message.reply(`Your permission level is: ${level} - ${friendly}`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "myPerms",
  aliases: [],
  category: "Misc",
  description: "Tells you your permission level for the current message location.",
  usage: "myPerms"
};
