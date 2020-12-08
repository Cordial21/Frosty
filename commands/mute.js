const ms = require('ms');

exports.run = (client, message, args) => {
    const time = args[1];
    const target = message.mentions.members.first();
    let mutedRole = message.guild.roles.cache.get('780378188483919872');
    let memberRole = message.guild.roles.cache.get('780377827517399071');
    
  if (target) {
    if (time) {
      if (mutedRole) {

        target.roles.add(mutedRole);
    target.roles.remove(memberRole);

    message.channel.send(`@${target.user.tag} has been muted for ${ms(ms(time))}`);

         setTimeout(function() {
           target.roles.add(memberRole);
           target.roles.remove(mutedRole);
           message.channel.send(`@${target.user.tag} has been unmuted!`)
         }, ms(time));

      }
    }
  }

}
exports.conf = {
  enabled: true, //boolean
  guildOnly: true, //boolean
  aliases: ['m', 'punish'], //must be in Array
  permLevel: "Moderator" //look at config.js
};

exports.help = {
  name: "mute",
  category: "Moderation", //System, Misc
  description: "This is a Moderator command used to mute users!",
  usage: "mute <@user> <time>s/m/h/d/w/m/y"
}
