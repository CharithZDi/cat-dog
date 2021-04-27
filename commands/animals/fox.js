const axios = require('axios');
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "fox",
    description: "dd",

    run: async (bot, message, args) => {
        
        axios.get('https://randomfox.ca/floof/')
        .then(function (response) {
            
           
            const embed1 = new Discord.MessageEmbed()
            .setTitle("Here a foxy")
            .setImage(response.data.image)
            message.channel.send(embed1)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

      
        });



      }

    
}