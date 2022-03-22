exports.run = (client, message, flags) => {
  try {
    const cooldown = require('../modules/cooldown.js');
    cooldown(client, thisName, message.author.id, thisCooldown);

    client.database.commands.help.runs = client.database.commands.help.runs + 1

    // If it's the owner, set owner to true
    if (message.author.id == client.config.owner) { owner = true; } else { owner =  false};
    

    message.channel.send(help(client, message, flags, owner));

  } catch (err) {
    client.database.commands.help.fails = client.database.commands.help.fails + 1
    client.modules.presets.error(client, err, message, thisName);
  }
}

const help = (client, message, flags, owner) => {
  const Discord = require('discord.js');
  let helpEmbed = new Discord.MessageEmbed()
    .setTitle(client.user.username)
    .setDescription(`My prefix is \`${client.config.prefix}\` \n\n**r!help** \nView this list of commands, and the link to the support server.\n\n**r!ping** [-simple]\nBot will return its latency so you can check on it.\n\n> **RickRoll Commands**\n\n**r!rickroll [{@mention}]** [-silent]\nJoins your (or the mentioned member's) Voice Channel & rickrolls everyone.\n\n**r!stop [{@mention}]** [-silent] \nThe bot leaves the voice channel. Runs automatically after 3m15s.\n\n> **Others Commands**\n\n**r!meme**\ncoming soon.\n\n**r!slap**\ncoming soon\n`);
  
  helpEmbed.addField('> Support', '\n\nIf you still need help with the bot, [click here to join our support server.](https://discord.gg/9QQuMkJUrY)');

  helpEmbed.setFooter("Made by Odd Coder")
    .setColor('#FFD300');

  return helpEmbed
};

const thisName = 'help';
const thisCooldown = 2500

exports.cooldown = (client) => {
  client.modules.cooldowns.set(thisName, thisCooldown);
}