const fetch = require('node-fetch')
const config = {
token : 'التوكن هنا',
  cid : 'ايدي الروم هنا'
}
////////All Right Reserved For Prise


 const discord = require("discord.js")

const Discord= require('discord.js')

const client = new discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

    

client.on('messageReactionAdd', async(reaction_orig, user) => {

  const channel = client.channels.cache.get(config.cid)

  const message = !reaction_orig.message.author ? await reaction_orig.message.fetch() : reaction_orig.message;

const args = message.content.split(" ").slice(1).join(" ")

  if(reaction_orig.emoji.name === '🔴') {

   let embed = new Discord.MessageEmbed()

    .setDescription(`

صاحب البلاغ : 

<@${user.id}>- ${user.id}

صاحب الرسالة : 

<@${message.author.id}>

الروم الي فيه البلاغ : 

<#${message.channel.id}>

رابط الرسالة : 

https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id}

الرسالة : 

${args}


`)

  const channe = channel.send(embed)

.then(msg => {

  msg.react('✅')

})
  



    

   client.login(config.token)
