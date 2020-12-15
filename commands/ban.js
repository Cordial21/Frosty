exports.run = (client, message, args, args1) => { 
    const target = message.mentions.users.first();
    
    if (target) {
        if (args[1]) {
          const rreason = args.slice(1).join(" ");
    const targetMemberID = message.guild.members.cache.get(target.id)
    targetMemberID.ban({ days: 1, reason: `${rreason}`});
    message.reply(`${target.tag} has been banned! **Reason**: ${rreason}`);
    console.log(`${message.author.tag} has banned ${target.tag}! **Reason**: ${rreason}`);
        } else {message.reply(`You did not specify a reason!`)}
        } else {message.reply(`You did not specify someone to ban, or that user is not a member!`)}
};

exports.conf = {
  enabled: true, //boolean
  guildOnly: true, //boolean
  aliases: ['b'], //must be in Array
  permLevel: "Administrator" //look at config.js
};

exports.help = {
  name: "ban",
  category: "Administration", //System, Misc
  description: "An Admin Only command used to ban members from the server!",
  usage: "ban <@user> <reason>"
}
