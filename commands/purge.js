exports.run = async (client, message, args) => { 
    if(!args[0]) return message.reply("Incorrect syntax! Please add an amount to clear!");
        if(isNaN(args)) return message.reply("Incorrect syntax! Please use a number!");
        if(args > 100) return message.reply("You can not delete more than 100 messages!")
        if(args < 1) return message.reply("You must delete at least one message!");
        await message.channel.messages.fetch({limit: args}).then(messages => {
            message.channel.bulkDelete(messages);
        });
},

exports.conf = {
  enabled: true, //boolean
  guildOnly: true, //boolean
  aliases: ['clean', 'cls'], //must be in Array
  permLevel: "Moderators", //look at config.js
};

exports.help = {
  name: "purge",
  category: "Moderation", //System, Misc
  description: "This is a Moderation command used to purge/clean/deleteMessages in one channel",
  usage: "purge <number>"
};