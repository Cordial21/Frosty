const ms = require("ms");
const db = require("db");
const { DiscordAPIError } = require("discord.js");
const economy = new db.table('economy');

exports.run = async (client, message, args) => { 
    const target = message.mentions.users.first();
    if (!target) return message.reply(`You did not specify someone!`);
    const targetmoney = economy.fetch(`money_${target.id}`);
    if (!targetmoney)
    const usermoney = economy.fetch(`money_${message.author.id}`);

    const timeEmbed = new Discord.MessageEmbed()
    .setColor('#fcfc00')
    .setDescription(`No, you have tried to rob someone too much, you dirty criminal! (Hint: Try again in ${timeremaining})`)
};

exports.conf = {
  enabled: false, //boolean
  guildOnly: true, //boolean
  aliases: ['steal'], //must be in Array
  permLevel: "User", //look at config.js
};

exports.help = {
  name: "rob",
  description: "iykyk",
  aliases: ['steal'],
  usage: "rob <@user>",
  category: "", //System, Misc etc.
};