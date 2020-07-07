const { WebhookClient } = require("discord.js");

const wh = new WebhookClient(
  "707687773783457894",
  "W3xGrcnf2U5mS8bh2Qmwyai13sgq51e5ArjJd4O-3xyb7PnmyvusWr3BtdS-4UKgojwl"
);

module.exports.run = async (client, message, args) => {
  let member = message.mentions.users.first() || message.author;
  wh.edit({ name: member.username, avatar: member.avatarURL({ format: 'jpg', dynamic: true }) })
  if (message.content.includes('gostoso')) return wh.send('Is it me or is it you?')
  if (!message.content.includes('gostoso')) return wh.send(args.join(' '))
};

module.exports.help = {
  name: "saytest",
  aliases: ["st"],
  disabled: false,
  ownerOnly: false,
  adminOnly: true,
  modOnly: false,
  category: "Fun"
};
