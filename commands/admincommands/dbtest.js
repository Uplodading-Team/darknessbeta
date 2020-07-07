exports.run = async (client, message, args, DarkEmbed) => {
    let embedTest = DarkEmbed()
    embedTest.setTitle('Hello.')
    message.channel.send(embedTest)
}

module.exports.help = {
    name: "dbtest",
    aliases: ['test'],
    disabled: false,
    ownerOnly: true,
    adminOnly: false,
    modOnly: false,
    category: "Owner-only Commands"
};
  