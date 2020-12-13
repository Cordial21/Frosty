const db = require("quick.db");
const economy = new db.table('economy');

exports.run = (client, message, args) => { 
    const itemname = args.shift().toLowerCase();
    const user = message.author.id;
    const account = economy.get(`money_${user}`);
    const bronzerole = message.guild.roles.cache.get("782752657013997618");


    if(!itemname) return message.reply(`You did not specify an item to buy! Please type \`+shop\` to see the available items!`);
    if(!account) {
        return message.reply(`You do not have an account. Please create one using \`+createaccount\`! If you believe there is an error, please contact a developer or @Cordial#9077`);
    } else if (itemname === "coffee") {

        economy.add(`items_${user}.coffee`, 1);
        message.reply(`You bought a Coffee!`);

    } else if (itemname === "bronze") {

        const checkbronze = economy.get(`items_${user}.bronze`);
        if (checkbronze == 1) return message.reply(`You have already bought the Bronze Rank!`);
        economy.set(`items_${user}.bronze`, 1);
        user.roles.add(bronzerole);
        message.reply(`You bought the Bronze Rank!`);

    } else if (itemname === "silver") {

    } else if (itemname === "gold") {
        
    } else if (itemname === "platinum") {
        
    } else if (itemname === "diamond") {
        
    }


};

exports.conf = {
  enabled: false, //boolean
  guildOnly: true, //boolean
  aliases: ['purchase', 'get'], //must be in Array
  permLevel: "User", //look at config.js
};

exports.help = {
  name: "buy",
  description: "The shop for Frostie(s)",
  aliases: ['purchase', 'get'],
  usage: "shop <itemname>",
  category: "Economy", //System, Misc etc.
};