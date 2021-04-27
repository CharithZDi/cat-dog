const axios = require('axios');
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "catfact",
    description: "dd",

    run: async (bot, message, args) => {
        
        axios.get('https://catfact.ninja/fact')
        .then(function (response) {
           
            const embed1 = new Discord.MessageEmbed()
            .setTitle("CAT-FACTS")
            .setDescription(`**${response.data.fact}**`)
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