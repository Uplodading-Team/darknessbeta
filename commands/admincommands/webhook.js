const { WebhookClient } = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.channel
    .createWebhook("Darkness", {
      avatar:
        "https://cdn.discordapp.com/avatars/700825287172292749/a198d2cc81c10a13ac58e967e34c2bbb.webp"
    })
    .then(webhook =>
      console.log(
        `Created webhook at ${message.channel.name} (${message.channel.id}) -- ${message.guild.name} (${message.guild.id})
          \n\nTOKEN: ${webhook.token}
          \n\nID: ${webhook.id}`
      )
    )
    .catch(console.error);
};

module.exports.help = {
  name: "webhook",
  aliases: ["wh"],
  disabled: false,
  ownerOnly: false,
  adminOnly: true,
  modOnly: false,
  category: "Fun"
};
