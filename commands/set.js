const Enmap = require("Enmap");

exports.run = async (client, message, args, args1) => { 
    const target = message.mentions.members.first();
    const amount = args1;

    if(target === undefined) {
    const key = `${message.guild.id}-${target.id}`;

        if (isNaN(amount)) return message.reply("You did not specify an amount!");
         client.currency.set(key, "currency");
         message.channel.send(`Set ${target.tag}'s amount to ${amount}!`)
        } else return message.reply("You did not specify someone!")
};

exports.conf = {
  enabled: false, //boolean
  guildOnly: true, //boolean
  aliases: [], //must be in Array
  permLevel: "User", //look at config.js
};

exports.help = {
  name: "set",
  description: "An Admin command used to set the balance of a user.",
  aliases: [],
  usage: "set <@user> <Numvalue>",
  category: "Economy", //System, Misc etc.
};