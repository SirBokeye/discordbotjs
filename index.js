const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () =>{
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("in Bixbyland")
});

bot.on("guildMemberAdd", async member => {

    console.log(`${member.id} joined the server`);

    let welcomechannel = member.guild.channels.find(`name`, "welcome_leave");
    welcomechannel.send(`HEEY ER IS EEN NIEUW IEMAND WOW ${member} op de server gekomen`)

});

bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    cmd = cmd.toLowerCase();

    if(cmd === `${prefix}Hi`){
        return message.channel.send("HI!");
    }

    if(cmd === `${prefix}Hoi`){
        return message.channel.send("Ello!");
    }

    if(cmd === `${prefix}Hallo`){
        return message.channel.send("Hoi!");
    }

    if(cmd === `${prefix}Hey`){
        return message.channel.send("Hey hoe is het!");
    }
    
    if(cmd === `${prefix}BIEM`){
        return message.channel.send("WOW!");
    }
    
    if(cmd === `${prefix}Dumpert`){
        return message.channel.send("DUMPERT REETEN!! http://www.dumpert.nl/");
    }
    
    if(cmd === `${prefix}HI`){
        return message.channel.send("ELLO MY FRIEND");
    }
    
    if(cmd === `${prefix}HOMO`){
        return message.channel.send("ZUIG EEN PIEMEL AARSLIKKER");
    }
    
    if(cmd === `${prefix}Homo`){
        return message.channel.send("ZUIG EEN PIEMEL AARSLIKKER");
    }
    
    if(cmd === `${prefix}P90`){
        return message.channel.send(":P90:");
    }
    
     if(cmd ===`${prefix}Bixby`){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("BIXBY!")
        .setColor("#42bff4")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)

        return message.channel.send(botembed);
    }
    
    if(cmd === `${prefix}BIXBY`){
        return message.channel.send("BIXBY BIXBY BIXBY");
    }
    
     if(cmd === `${prefix}Dylan`){
        return message.channel.send(":bear:");
    }
    
     if(cmd === `${prefix}Jappie`){
        return message.channel.send(":beer:");
    }
    
    if(cmd === `${prefix}jappie`){
        return message.channel.send(":beer:");
    }
    
    if(cmd === `${prefix}jap`){
        return message.channel.send(":beer:");
    }
    
    if(cmd === `${prefix}Jap`){
        return message.channel.send(":beer:");
    }
    
    if(cmd === `${prefix}Daan`){
        return message.channel.send(":wolf:");
    }

    if(cmd === `${prefix}Jay`){
        return message.channel.send(":monkey_face:");
    }
    
    if(cmd ===`${prefix}serverinfo`){

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Si Si very nice server my friend")
        .setColor("#42bff4")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount);

        return message.channel.send(serverembed);
    }

    if(cmd ===`${prefix}botinfo`){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Ello my name is Bixby!")
        .setColor("#42bff4")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created on", bot.user.createdAt);

        return message.channel.send(botembed);
    }
    
});
bot.login(process.env.BOT_TOKEN);
