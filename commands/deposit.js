const db = require("quick.db");
const economy = new db.table('economy');
const Discord = require("discord.js");

exports.run = async (client, message, args) => { 
    const user = message.author;
    const amount = args[0];
    const member = economy.fetch(`money_${user.id}.balance`);
    const member2 = economy.fetch(`bank_${user.id}.balance`);
  
    if (amount == 'all') {
  
      const embeeconomyank = new Discord.MessageEmbed()
      .setColor('#FFFFFF')
      .setDescription("<:Cross:618736602901905418> You don't have any money to deposit");
  
      if(member === 0) return message.channel.send(embeeconomyank)
  
      economy.add(`bank_${user.id}.balance`, member)
      economy.subtract(`money_${user.id}.balance`, member)
      const embed5 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Check:618736570337591296> You have deposited all your coins into your bank`);
    return message.channel.send(embed5)
    } else if (isNaN(amount)) return message.reply(`You didn't specify an amount!`)

    const embed3 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Cross:618736602901905418> You can't deposit negative money`);
  
    if (message.content.includes('-')) { 
        return message.channel.send(embed3)
    }
    const embed4 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Cross:618736602901905418> You don't have that much money`);
  
    if (member < amount) {
        return message.channel.send(embed4)
    }
  
    const embed5 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`<:Check:618736570337591296> You have deposited ${amount} coins into your bank`);
  
    message.channel.send(embed5)
    economy.add(`bank_${user.id}.balance`, amount)
    economy.subtract(`money_${user.id}.balance`, amount)
    }

exports.conf = {
enabled: true, //boolean
guildOnly: true, //boolean
aliases: ['dep'], //must be in Array
permLevel: "User" //look at config.js
};

exports.help = {
name: "deposit",
description: "Checks the balance and level of a user",
aliases: ['dep'],
usage: "deposit",
category: "Economy", //System, Misc
};