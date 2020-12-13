const Discord = require('discord.js');
const db = require('quick.db');

//import, and require things

exports.run = (client, message) => { 
    const money = db.StartsWith("money_", {sort: ".data"});
    const content = "";
    message.reply(`This is currently a work in progress!`)
};

exports.conf = {
  enabled: false, //boolean
  guildOnly: true, //boolean
  aliases: ['lead'], //must be in Array
  permLevel: "User", //look at config.js
};

exports.help = {
  name: "leaderboard",
  description: "Displays the leaderboard",
  aliases: ['lead'],
  usage: "leaderboard",
  category: "Economy", //System, Misc etc.
};