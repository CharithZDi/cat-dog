const axios = require('axios');
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "dogfact",
    description: "dd",

    run: async (bot, message, args) => {
        
        axios.get('https://dog-api.kinduff.com/api/facts')
        .then(function (response) {
        
            const embed1 = new Discord.MessageEmbed()
            .setTitle("DOG-FACTS")
            .setDescription(`**${response.data.facts[0]}**`)
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