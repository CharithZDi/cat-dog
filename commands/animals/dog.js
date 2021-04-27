const axios = require('axios');
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "dog",
    description: "dd",

    run: async (bot, message, args) => {
        
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            console.log(response.data.message);
           
            const embed1 = new Discord.MessageEmbed()
            .setTitle("HERE A DOG FOR YOU")
            .setImage(response.data.message)
            message.channel.send(embed1)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {

      
        });



      }
    





    
}