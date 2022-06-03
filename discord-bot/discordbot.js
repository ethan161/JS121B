// Initialize dotenv
require("dotenv").config();
// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Log In our bot
CLIENT_TOKEN =
  "OTgyMzEyNzA5NDI3MTY3MzIy.GFGY7_.ASzsXOhx1d_unPGzXNL6BoPpa7HqpY2xUvIAL8";
client.login(CLIENT_TOKEN);

client.on("messageCreate", (msg) => {
  // You can view the msg object here with console.log(msg)
  message = msg.content;
  switch (message) {
    case "Hello!":
      msg.reply(`Hello ${msg.author.username}`);
      break;
    case "Math":
      number1 = Math.floor(Math.random() * 100) + 1;
      number2 = Math.floor(Math.random() * number1);
      msg.reply(
        `Here's a division problem I completed for you:\n${number1} / ${number2} = ${
          number1 / number2
        }`
      );
  }
});
