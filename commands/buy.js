const db = require("quick.db");
const economy = new db.table('economy');

exports.run = (client, message, args) => { 
    const itemname = args.shift().toLowerCase();
    const user = message.author.id;
    const account = economy.get(`money_${user}`);
    const money = economy.get(`money_${user}.balance`);

    const bronzerole = message.guild.roles.cache.get("782752657013997618");
    const silverrole = message.guild.roles.cache.get("782752854497951805");
    const goldrole = message.guild.roles.cache.get("782753227925749771");
    const platrole = message.guild.roles.cache.get("782753608847720499");
    const diamondrole = message.guild.roles.cache.get("782753935600517120");

    const checkbronze = economy.get(`items_${user}.bronze`);
    const checksilver = economy.get(`items_${user}.silver`);
    const checkgold = economy.get(`items_${user}.gold`);
    const checkplat = economy.get(`items_${user}.platinum`);
    const checkdiamond = economy.get(`items_${user}.diamond`);


    if(!itemname) return message.reply(`You did not specify an item to buy! Please type \`+shop\` to see the available items!`);
    if(!account) {
        return message.reply(`You do not have an account. Please create one using \`+createaccount\`! If you believe there is an error, please contact a developer or @Cordial#9077`);
    } else if (itemname === "coffee") {

        economy.add(`items_${user}.coffee`, 1);
         message.reply(`You bought a Coffee!`);


    } else if (itemname === 'bronze') {
        if (checkbronze !== 1) { 
          if (money < 500) return message.reply(`You do not have enough Frosties to buy this! This costs 500 Frosties, but you only have ${money}!`);

          economy.subtract(`money_${user}.balance`, 500);
         economy.set(`items_${user}.bronze`, 1);
         message.member.roles.add(bronzerole);

        message.reply("You bought the Bronze Rank!");
    } else return message.reply("You have already bought the Bronze Rank!");



    } else if (itemname === "silver") {
      if (checkbronze == 0) return message.reply(`You can't skip, you first must buy the Bronze Rank!`);
      if (checksilver !== 1) { 
        if (money < 1000) return message.reply(`You do not have enough Frosties to buy this! This costs 1000 Frosties, but you only have ${money}!`);

        economy.subtract(`money_${user}.balance`, 1000);
       economy.set(`items_${user}.silver`, 1);
       message.member.roles.add(silverrole);
      message.reply("You bought the Silver Rank!");
  } else return message.reply("You have already bought the Silver Rank!");


    } else if (itemname === "gold") {
      if (checksilver == 0) return message.reply(`You can't skip, you first must buy the Silver Rank!`);
      if (checkgold !== 1) { 
        if (money < 1500) return message.reply(`You do not have enough Frosties to buy this! This costs 1500 Frosties, but you only have ${money}!`);

        economy.subtract(`money_${user}.balance`, 1500);
       economy.set(`items_${user}.gold`, 1);
       message.member.roles.add(goldrole);
      message.reply("You bought the Gold Rank!");
  } else return message.reply("You have already bought the Gold Rank!");


    } else if (itemname === "platinum") {
      if (checkgold == 0) return message.reply(`You can't skip, you first must buy the Gold Rank!`);
      if (checkplat !== 1) { 
        if (money < 2250) return message.reply(`You do not have enough Frosties to buy this! This costs 2250 Frosties, but you only have ${money}!`);

        economy.subtract(`money_${user}.balance`, 2250);
       economy.set(`items_${user}.platinum`, 1);
       message.member.roles.add(platrole);
      message.reply("You bought the Platinum Rank!");
  } else return message.reply("You have already bought the Platinum Rank!");
  
    } else if (itemname === "diamond") {
        if (checkplat == 0) return message.reply(`You can't skip, you first must buy the Platinum Rank!`);
      if (checkdiamond !== 1) { 
        if (money < 3000) return message.reply(`You do not have enough Frosties to buy this! This costs 3000 Frosties, but you only have ${money}!`);

        economy.subtract(`money_${user}.balance`, 3000);
       economy.set(`items_${user}.diamond`, 1);
       message.member.roles.add(diamondrole);
      message.reply("You bought the Diamond Rank!");
  } else return message.reply("You have already bought the Diamond Rank!");
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