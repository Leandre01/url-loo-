const { Client, MessageEmbed, Collection, Intents } = require("discord.js");
const client = global.client = new Client({fetchAllMembers: true, intents: Object.keys(Intents.FLAGS)});

client.on("ready", async() => {
    
    client.user.setActivity("URL 😘")

});

client.on('guildMemberAdd', (member) => {

   member.send({embeds : [new MessageEmbed().setColor("RANDOM").setTitle(`Kardeşim bak url yi aldın 😂`).setDescription(`Kardeşim bu url mühürlenmiştir.`)]}) 
   member.guild.members.kick(member.id)
})

client.on("messageCreate", message => {
    const tag = message.content.toLowerCase();
    if (
      tag === ".ping" || tag === "!ping"
    ) {
      message.channel.send(`\`AKTİF\``);
    }
  });

client.login("")