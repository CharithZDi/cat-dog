const axios = require('axios');
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "rabbit",
    description: "dd",

    run: async (bot, message, args) => {
        
        axios.get('https://api.bunnies.io/v2/loop/random/?media=gif')
        .then(function (response) {
           
            const embed1 = new Discord.MessageEmbed()
            .setTitle("HERE A RABBIT FOR YOU")
            .setImage(response.data.media.gif)
            message.channel.send(embed1)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

      
        });

      }

}