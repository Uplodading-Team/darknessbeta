exports.run = async (client, message, args, DarkEmbed) => {
  let embed = DarkEmbed()
  embed.setAuthor(message.author.username, message.author.avatarURL( {dynamic: true} ))
  try {
    let code = args.join(" ");
    let evaled = eval(code);
    
    if (evaled instanceof Promise) evaled = await evaled;
    if(!evaled) return await message.reply('I can\'t eval air...');
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled)
    embed.setDescription("**Your command was**\n \`\`\`" + args.join(" ") + "\`\`\`\n **Response:** \n\`\`\`" + clean(evaled).replace('', 'you tried :3') + "```")
    return await message.channel.send(embed)
  } catch (err) {
    embed.setDescription(("**Your command was**\n \`\`\`" + args.join(" ") + "\`\`\`\n **Error:** \n\`\`\`" + clean(err) + "```"))
  }
  message.channel.send(embed)
};

const clean = text => {
  if (typeof text === "string")
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  else return text;
};

module.exports.help = {
  name: "eval",
  aliases: ["evaluate", "e"],
  disabled: true,
  ownerOnly: true,
  adminOnly: false,
  modOnly: false,
  category: "Owner-only Commands"
};
