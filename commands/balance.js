const Enmap = require('Enmap');
const db = require("quick.db");
const economy = new db.table('economy');
//const config = require("./config.js")

exports.run = async (client, message) => { 

  const key = `${message.guild.id}-${message.author.id}`;
  //const curName = client.config.curName;
  
  const user = message.mentions.members.first() || message.author;
  const account = economy.get(`money_${user.id}`);

  if(account) {
    const bal = economy.get(`money_${user.id}.balance`);
    const bankbal = economy.get(`bank_${user.id}.balance`)
     message.channel.send(`@${user.tag} currently has ${bal} Frostie(s) in their hand, and has ${bankbal} safe!`);
  } else return message.reply("That user does not have an account!")

};

exports.conf = {
enabled: true, //boolean
guildOnly: true, //boolean
aliases: ['bal'], //must be in Array
permLevel: "User" //look at config.js
};

exports.help = {
name: "balance",
description: "Checks the balance and level of a user",
aliases: ['bal'],
usage: "balance",
category: "Economy", //System, Misc
};