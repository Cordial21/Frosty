exports.run = async (client, message, args, args1) => {
  const target = message.mentions.members.first();
  
  if (target) {
    if (args[1]) {
      const reason = args.slice(1).join(" ");
const targetMemberID = message.guild.members.cache.get(target.id)
targetMemberID.kick();
message.reply(`${target.tag} has been kicked! *Reason**: ${reason}`);
console.log(`${message.author.tag} has kicked ${target.tag}! **Reason**: ${reason}`);
    } else {message.reply(`You did not specify a reason!`)}
    } else {message.reply(`You did not specify someone to kick, or that user is not a member!`)}
};

exports.conf = {
  enabled: true, //boolean
  guildOnly: true, //boolean
  aliases: ['k'], //must be in Array
  permLevel: "Administrator" //look at config.js
};
exports.help = {
name: "kick",
category: "Administration",
description: "An Administrator-Only command used to kick members from the server.",
usage: "kick <@user> <reason>",
}
