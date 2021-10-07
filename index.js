const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
let Discord = require("discord.js")
let client = new Discord.Client()                                                                       


client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Put some random shit here" }, status: "dnd" })                  
})

    

client.on("message", message => {
if (message.content === "DONT TOUCH CODE") {
message.channel.send("AND PLEASE DONT TYPE IT IN THE DISCORD")
}
if(message.content === "-embed") {
 let embed = new Discord.MessageEmbed()
.setTitle(`Rules`)
.setDescription(`**- Don't PM users randomly.
- Don't post discord invites.
- Don't advertise your discord server.
- Don't sell your own products.
- Don't advertise your products.
- No sexism.
- No racism.
- No advertisement without permission.
- No links.
- No linking to other servers.
- this is just a exemple just copy your text and paste it here**`)
.setColor("RED")
.setURL("https://discord.js.org/#/docs/main/stable/typedef/MessageEmbedOptions")
.setFooter("hello")
.setTimestamp()
.setAuthor("GhostFACE")
.setThumbnail("https://cdn.discordapp.com/attachments/889948256174497882/895254670065418270/G-star_Logo.png")
.setImage("https://cdn.discordapp.com/attachments/889948256174497882/895254670065418270/G-star_Logo.png")

 message.channel.send(embed)
}
})







client.login("ODk1NjI4MDkzOTQxNzQzNjI2.YV7UqQ.XJ3LXYVlV1q99XMnQjJQYQCOIYg")



















