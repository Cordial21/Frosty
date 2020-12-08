exports.run = (client, message, args) => {
    const target = message.mentions.members.first();
    let mutedRole = message.guild.roles.cache.get('780378188483919872');
    let memberRole = message.guild.roles.cache.get('780377827517399071');
    
  if (target) {
      if (mutedRole) {

        target.roles.add(memberRole);
        target.roles.remove(mutedRole);

    message.channel.send(`@${target.user.tag} has been unmuted!`);
      }
  }
}
exports.conf = {
  enabled: true, //boolean
  guildOnly: true, //boolean
  aliases: ['um'], //must be in Array
  permLevel: "Moderator" //look at config.js
};

exports.help = {
  name: "unmute",
  category: "Moderation", //System, Misc
  description: "This is a Moderator command used to unmute users!",
  usage: "unmute <@user>"
}
