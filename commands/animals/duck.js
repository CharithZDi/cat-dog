const axios = require('axios');
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "duck",
    description: "dd",

    run: async (bot, message, args) => {
        
        axios.get('https://random-d.uk/api/v1/random?type=png')
        .then(function (response) {
            const embed1 = new Discord.MessageEmbed()
            .setTitle("Here a duck")
            .setImage(response.data.url)
            message.channel.send(embed1)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

      
        });



      }

    
}