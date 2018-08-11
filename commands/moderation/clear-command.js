const commando = require('discord.js-commando')

class ClearCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            aliases: ['clean', 'purge'],
            group: 'moderation',
            memberName: 'clear',
            description: 'Clears a specified number of messages from the channel',
            args: [
                {
                    key: 'value',
                    prompt: 'How many messages would you like to delete?',
                    type: 'integer'
                }
            ]
        });
    }

    async run(msg, { value }) {
        msg.delete();
        // value = value.Int;
        // return msg.say(value);
        var id = msg.channel.lastMessageID;
        msg.channel.fetchMessages({around: id, limit: 1})
            .then(messages => {
                const fetchedMsg = messages.first(); //collection
                fetchedMsg.delete();
            });
    }

        // const fetched = await MessageChannel.channel.fetchMessages({limit: args[0]})
}

module.exports = ClearCommand
