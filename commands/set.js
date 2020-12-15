const Enmap = require("Enmap");
const db = require("quick.db")
const economy = new db.table('economy')

exports.run = async (client, message, args, args1) => { 
    const target = message.mentions.members.first();
    const account = economy.get(`money_${target.id}`);
    const amount = args[1];

    if(!account) {return message.reply("You did not specify someone, or that member does not have an account!")}
        if (isNaN(amount)) return message.reply("You did not specify an amount!");
        if(amount < 0) return message.reply(`nonono, no Negative Numbers!`);
         economy.set(`money_${target.id}.balance`, amount)
         message.channel.send(`Set ${target}'s amount to ${amount}!`)
};

exports.conf = {
  enabled: true, //boolean
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