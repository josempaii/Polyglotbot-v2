const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+'

clent.once('ready', () => {
    console.log('Testbot is ready');
});

client.on('message', message => {
    if(!message.content.startswith(prefix)|| message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'test'){
        message.channel.send('I am working!')
    }
});


client.login('TOKEN')