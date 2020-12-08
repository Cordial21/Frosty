const Enmap = require('Enmap');
//const config = require("./config.js")

exports.run = async (client, message) => { 

  const key = `${message.guild.id}-${message.author.id}`;
  //const curName = client.config.curName;
  
  const user = message.mentions.members.first() || message.author;
  const bal = client.currency.get(key, "currency");
  const lev = client.currency.get(key, "level");


  return message.reply(`You currently have ${bal} Frostie(s), and you are at level ${lev}!!`);
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