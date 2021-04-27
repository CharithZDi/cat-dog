const Discord = require("discord.js");


module.exports = {
  name: "coinflip",

  run: async (client, message, args) => {
    let coine = ["HEAD","TAIL"];
    let coin = coine[Math.floor(Math.random() * coine.length)];

    if (coin === "HEAD") {
        const Embed1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("ITs HEAD !" )
        .setTimestamp()
        .setImage("https://media.tenor.com/images/16d4f2d1ab5dfad7224d6b93171926f9/tenor.gif")
        message.channel.send(Embed1)

    }
    if (coin === "TAIL") {
        const Embed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("ITs TAIL !" )
        .setTimestamp()
        .setImage("https://media.tenor.com/images/16d4f2d1ab5dfad7224d6b93171926f9/tenor.gif")
        message.channel.send(Embed2)

    }

  }
};