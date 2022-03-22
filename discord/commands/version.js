exports.run = (client, message, flags) => {
  try {
  const cooldown = require('../modules/cooldown.js');
  cooldown(client, 'version', message.author.id, 2500);

  client.database.commands.version.runs = client.database.commands.version.runs + 1
  
  const Discord = require('discord.js');

  const versionEmbed = new Discord.MessageEmbed()
    .setTitle(`v1`)
    .setDescription('Rickroll bot version lmao?')
    .setColor('#FFD300')
    .setFooter('Made by Odd Coder');

  message.channel.send(versionEmbed)
  }catch(err){
    client.database.commands.version.fails = client.database.commands.version.fails + 1
    client.modules.presets.error(client, err, message, 'CommandNameHere');
  }
}

const version = (client) => {
  const Discord = require('discord.js');
}

const thisName = 'version';
const thisCooldown = 2500

exports.cooldown = (client) => {
  client.modules.cooldowns.set(thisName, thisCooldown);
}