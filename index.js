const commando = require('discord.js-commando')
const bot = new commando.Client({
    commandPrefix: '~',
    owner: '261558646553575425',
    unkownCommandResponse: false,
    disableEveryone: true
});
const config = require("./config.json");

bot.registry
    .registerDefaultTypes()
    .registerGroups([
        ['moderation', 'Moderation:'],
        ['games', 'Game:'],
        ['random', 'Random:']
    ])
    .registerDefaultGroups({
        moderation: false
    })
    .registerDefaultCommands()
    .registerCommandsIn(__dirname + "/commands");

bot.on('ready', function () {
    bot.user.setPresence({
        game: {
            name: '',
        }
    })
    console.log('Ready');
});

bot.login(config.token);
