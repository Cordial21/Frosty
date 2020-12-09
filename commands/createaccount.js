const db = require("quick.db");
const economy = new db.table('economy')

exports.run = (client, message) => {
const user = message.author.id;
const account = economy.get(`money_${user}`);

if (account) return message.reply("You already have an account! If there was a problem, or you don't think you have an account, please contact an @Developer or @Cordial#9077!");

economy.set(`money_${user}.balance`, 0);
economy.set(`bank_${user}.balance`, 0)

return message.reply("Your account was created!");

}

exports.conf = {
    enabled: false, //boolean
    guildOnly: true, //boolean
    aliases: ["ca"], //must be in Array
    permLevel: "User", //look at config.js
  };
  
  exports.help = {
    name: "createaccount",
    description: "Creates an account",
    aliases: ["ca"],
    usage: "createaccount",
    category: "Economy", //System, Misc etc.
  };