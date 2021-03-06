exports.run = (client, message, args) => {
  console.log(message.author.tag, "used the info command");
  const Discord = require("discord.js");
  const embed = new Discord.MessageEmbed();
  embed.setTitle("__**Bot Dev**__");
  embed.setThumbnail(
    "https://cdn.discordapp.com/avatars/219410026631135232/a_f882c3836fc2a04ed028f1a459973453.gif"
  );
  embed.setColor(0x00ae86);
  embed.addField("Creators:", "Yuichiro#0001 | Rodolfo#4490 | Frey#6969");
  embed.addField("Bot language", "[Discord.js](https://discord.js.org/#/)");
  embed.addField(
    "Bot invite link",
    `[Link](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`
  );
  embed.addField(
    "Social links:",
    `${"[Twitch](https://www.twitch.tv/yuichiro__)"} | ${"[Support Server](https://discord.gg/z3ptA9Q)"} | ${"[Steam](http://steamcommunity.com/id/betmennpt/)"} | ${"[Twitter](https://twitter.com/ruicabral11)"}`
  );
  embed.addField(
    "Facebook group for helping with 'Hackintoshing'",
    "[Link to the group](https://www.facebook.com/groups/586474291953431/)"
  );
  embed.setTimestamp();
  embed.setFooter("darkness");
  message.channel.send(embed);
};

module.exports.help = {
  name: "info",
  aliases: ["i"],
  disabled: false,
  ownerOnly: false,
  adminOnly: false,
  modOnly: false,
  category: "Information"
};
