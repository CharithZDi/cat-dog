const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "hug",
    description: "dd",
    cooldown: 1000 * 5,

    run: async (bot, message, args) => {
        let Member = message.mentions.users.first()

        if(!args[0]) return message.reply("**You cant hug your self !**")
        
        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`**${Member.username}** have been huggd by **${message.author.username}**`)
          .setDescription(`Aww :hearts: **${Member.username}** That Was Cute <3!`)
          .setThumbnail(Member.displayAvatarURL({ dynamic: true }))
          .setImage("https://cdn.discordapp.com/attachments/834398965310291982/834448473901367316/2Q.png")
          .setFooter(`Requested by ${message.author.username}`)
          .setTimestamp();
    
        message.channel.send(embed);
          
      }
    





    
}
