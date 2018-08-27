const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

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


    if(cmd === `${prefix}report`){

        let rUser = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Kan het ventje niet vinden.");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Report")
        .setColor(#42bff4)
        .addField("Reported User", `${rUser} met ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} met ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Tijd", message.createdAt)
        .addField("Reden", reason);

        message.channel.send(reportEmbed);
        return;
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
