const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("Jnaby.ss");
const client = new Discord.Client();




 const devs = ['485554728349204500' , '485554728349204500' , '485554728349204500', '485554728349204500', '485554728349204500', '485554728349204500'];
const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**  ${argresult} ply .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**  ${argresult} wt .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**  ${argresult} ls .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/muuuuuute");
      message.channel.sendMessage(`**  ${argresult} st .. :white_check_mark:**`)
    }
  if (message.content.startsWith(adminprefix + 'us')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**us ..**${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'av')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**avatar ... :** `);
  }
  });

  

  

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
 
});

client.login(process.env.BOT_TOKEN);
