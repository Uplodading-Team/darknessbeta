exports.run = (client, message, args, DarkEmbed) => {
  const Discord = require("discord.js");
  let embed = DarkEmbed()
  embed.setTitle("**Bot Latency**");
  embed.setThumbnail(client.user.avatarURL());
  embed.addField("Websocket Latency", `${client.ws.ping}ms`);
  embed.addField("Discord API Latency", "soon");
  message.channel.send(embed);
};

module.exports.help = {
  name: "ping",
  aliases: [],
  disabled: false,
  ownerOnly: false,
  adminOnly: false,
  modOnly: false,
  category: "Information"
};
