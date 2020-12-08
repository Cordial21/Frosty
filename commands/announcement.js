exports.run = (client, message, args, args1) => {
    let annchannel = message.mentions.channels.first();
    let rannouncement = args.slice(1).join(" ");
    
    if(annchannel) {
      message.delete();
      annchannel.send(rannouncement);
      message.reply(`Your announcement was sent, and your trigger command was deleted`)
  } else {message.reply(`You didn't mention a channel!`)}
};

exports.conf = {
  enabled: true, //boolean
  guildOnly: true, //boolean
  aliases: ['ann'], //must be in Array
  permLevel: "Moderator" //look at config.js
};
exports.help = {
  name: "announcement",
  aliases: ['ann'],
  guildOnly: true,
  category: "Moderation", //System, Misc
  description: "Moderation command to make an announcement through the bot!",
  usage: "announcement <Your announcement here>"
};