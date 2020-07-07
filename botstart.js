const http = require("http");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const { Client, MessageEmbed, Collection, guild } = require("discord.js");
const fs = require("fs");
const Enmap = require("enmap");
const config = require("./config.json");
const { connect } = require("mongoose");
const client = new Client({
  disableEveryone: true,
  fetchAllMembers: true
});

const owners = [
  "286484126175985664",
  "219410026631135232",
  "460101157881118723"
];

const specialUsers = [];

client.config = require("./config.json");
client.mongoose = require("./util/db/mongoose");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  }); 
});

client.commands = new Collection();
client.aliases = new Collection();

client.settings = new Enmap({ name: "settings" });

const categories = ["usercomamnds", "admincommands", "testcommands"];

categories.forEach(category => {
  for (category of categories) {
    const categoriesFiles = fs.readdirSync(`./commands/${category}/`);
    for (const file of categoriesFiles) {
      const props = require(`./commands/${category}/${file}`);
      client.commands.set(props.help.name, props);
      props.help.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    }
  }
});

client.mongoose.init(connect);

client.on("message", message => {
  if (message.content.startsWith(config.PREFIX + "invite")) {
    message.channel.send(
      "Invite me using this link: https://discordapp.com/oauth2/authorize?client_id=504405249419902977&scope=bot&permissions=8"
    );
  }
});

client.on("message", message => {
  const args = message.content
  .slice(client.config.PREFIX.length)
  .trim()
  .split(/ +/g);
  if (message.author.id == client.user.id) return;
  if ((
    message.mentions.users.first() &&
    message.mentions.users.first().id == client.user.id + args.join(' '))) return;
  if (
    message.mentions.users.first() &&
    message.mentions.users.first().id == client.user.id
  ) {
    message.reply(
      `Hello! My prefix is \`${config.PREFIX}\`, type \`${config.PREFIX}help\` to see a list of commands.`
    );
  }
});

client.on("message", message => {
  if (!owners.includes(message.author.id)) return;
  if (message.author.id === message.author.bot) return;
  if (message.content.includes('hi darkness')) return message.reply("hi friend ily <3 :3")
  if (message.content.includes('stfu darkness')) return message.reply("no u")
  if (message.content.includes('dead chat') || message.content.includes('chat dead') || message.content.includes('chat died')) return message.reply("you killed it m8")
});

client.login("");

process.on("unhandledRejection", error => {
  console.error("Unhandled promise rejection:", error);
});




