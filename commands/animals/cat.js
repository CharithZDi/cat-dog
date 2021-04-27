const axios = require('axios');
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "cat",
    description: "dd",

    run: async (bot, message, args) => {
        
        axios.get('https://api.thecatapi.com/v1/images/search')
        .then(function (response) {
            console.log(response.data[0].url);
           
            const embed1 = new Discord.MessageEmbed()
            .setTitle("HERE A cat FOR YOU")
            .setImage(response.data[0].url)
            message.channel.send(embed1)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

      
        });



      }
    





    
}