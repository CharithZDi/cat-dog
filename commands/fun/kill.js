const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "kill",
    description: "dd",
    cooldown: 1000 * 5,

    run: async (bot, message, args) => {
        let Member = message.mentions.users.first()

        if(!args[0]) return message.reply("**Mention a user to kill **:knife:")
        
        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle(`**${Member.username}** have been killed by **${message.author.username}**`)
          .setDescription(`RIP **${Member.username}** hope you dont get killed again!`)
          .setThumbnail(Member.displayAvatarURL({ dynamic: true }))
          .setImage("https://cdn.discordapp.com/attachments/829373275314061355/833356743697498182/68a099fd55adf29a221ea1206df0497b-rip-gravestone-cartoon-icon-by-vexels.png")
          .setFooter(`Requested by ${message.author.username}`)
          .setTimestamp();
    
        message.channel.send(embed);
          
      }
    





    
}
