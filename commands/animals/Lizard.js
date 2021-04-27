const axios = require('axios');
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "lizard",
    description: "dd",

    run: async (bot, message, args) => {
        
        axios.get('https://nekos.life/api/v2/img/lizard')
        .then(function (response) {
            console.log(response.data.url);
            const embed1 = new Discord.MessageEmbed()
            .setTitle("Here a Lizard")
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