//import, and require things
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => { 
    message.reply("This bot was brought to life by Cordial#9077!")
};

exports.conf = {
  enabled: true, //boolean
  guildOnly: false, //boolean
  aliases: ['abt'], //must be in Array
  permLevel: "User" //look at config.js
};

exports.help = {
  name: "about",
  category: "Misc",
  description: "Gives some useful bot statistics",
  usage: "about"
};