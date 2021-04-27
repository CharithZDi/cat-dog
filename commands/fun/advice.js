const axios = require('axios');
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "advice",
    description: "dd",

    run: async (bot, message, args) => {
        
        axios.get('http://api.adviceslip.com/advice')
        .then(function (response) {
        
            const embed1 = new Discord.MessageEmbed()
            .setTitle("ADVICE")
            .setDescription(`**${response.data.slip.advice}**`)
            .setColor("RANDOM")
            message.channel.send(embed1)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

      
        });



      }

    
}