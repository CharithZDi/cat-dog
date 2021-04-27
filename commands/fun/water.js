const Color = "RANDOM";
const Discord = require("discord.js");


module.exports = {
  name: "water",
  description: "Return A Speed Image!",
  cooldown: 1000 * 5,

  run: async (client, message, args) => {

    let question = args.slice().join(" ");
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/water?text=${question}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};