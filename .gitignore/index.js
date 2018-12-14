const Discord = require('discord.js')                                       //démarrage
const bot = new Discord.Client()

function random(min, max){                                                  //bienvenue, au revoir, setgame
  min = Math.ceil(0);
  max = Math.floor(10);
  randnum = Math.floor(Math.random() * (max - min +1)+ min);
}


class gameset {


 static action () {
     
  random()

  if (randnum === 0) {
    bot.user.setActivity('rien') 
     }
  if (randnum === 1) {
    bot.user.setActivity('dormir debout') 
  }
  if (randnum === 2) {
    bot.user.setActivity('coder') 
  }
  if (randnum === 4) {
    bot.user.setActivity('découvrir un nouveau monde')
    }
  if (randnum === 5) {
    bot.user.setActivity("lire l'avenir !")
    }
  if (randnum === 6) {
    bot.user.setActivity('un FPS')
    }
  if (randnum === 7) {
    bot.user.setActivity('comquérir le monde !')
    }
  if (randnum === 8) {
    bot.user.setActivity('faire du popcorn')
    }
  if (randnum === 9) {
    bot.user.setActivity('gagner sa vie')
    }
  if (randnum === 3) {
    bot.user.setActivity('embêter Kobby et olii') 
    }
  if (randnum === 10) {
    bot.user.setActivity('je suis inutile ;(  ') 
    }
}
}

bot.on('message', message => {
  if (message.content === "/setgame") {
     gameset.action()
     console.log("game set")
   }
   })

bot.on('message', message => {
  if (message.content.startsWith('/setgames')) {

    let args = message.content.split(" ").slice(1);
    if(!args[0]) return message.channel.send("Tu dois préciser à quoi ombri doit jouer")

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");
   else {
      var setgames = message.content.substr(10) ;
      bot.user.setActivity(setgames)
    }
   console.log("quelqu'un a écris un setgames")
    }
  })



bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.on('ready', function (message) {
    gameset.action()
})


bot.on('guildMemberAdd', function(member) {
  member.createDM().then(function(channel) {
    return channel.send('Bienvenue ' + member.displayName + ' à toi sur le Bordel du dauph ! (je te conseil de modifié les paramètre des notifications de certains des channels)')
  })
})

bot.on('guildMemberAdd', member => {                                  //nom du channel variant suivant le serveur !!!!!
  member.guild.channels.find("name", "general").send(` ${member.user} bienvenue ! Fait pas attention au bordel ..., le ménage n'est pas fait ... `)
  console.log("nouveau memebre !")
})
bot.on('guildMemberRemove', member => {
  member.guild.channels.find("name", "general").send(` ${member.user} nous a quitté ;( `)
  console.log("-1 membre :( ")
})




// commandes

bot.on('message', message => {
  if (message.content === '/help') {
    var embed = new Discord.RichEmbed()
    .setDescription('liste des commandes:')
    .addField('Aucune pour le moment ;)', 'et même si il y en avait je te le dirais pas! :p ')
    .addField('tu crois vraiment que je vais te dévoiler tout mes secrets comme ça ??', ' \n \n \n */help 2* ')
    .setColor("A40340")
    message.channel.sendEmbed(embed)
    console.log("un utilisateur a voulu connaitre les commandes")
  }
  if (message.content === '/help 2') {
    var embed = new Discord.RichEmbed()
    .setDescription("Bon d'accord ... voici les commandes officielles ...:", )
    .addField("- /pierre, /feuille ou /ciseaux", "pour faire des partie de pierre feuille ciseaux avec le bot")
    .addField("- /pfc", "pour avoir les stats du bot au PFC")
    .addField("- /setgame", 'pour modifier le "jeu" du bot')
    .addField("(- /num {nb maxi})", "permet d avoir un nombre aléatoire compris entre 0 et {maxi}")
    .addField("- /jap", "lien pour un dictionnaire en ligne japonnais")
    .addField("- /pub", "lien vers quelques chaînes YT et Twitch")
    .addField("- /team", "lien vers le groupe steam Captain Noobies")
    .addField("- /lg", "lien vers un site pour joué avec au LG")
    .addField("- /ps", "lien vers pokémon showdown")
    .addField("- /invite", "invitation du discord")
    .addField("- /infos et /infop", "pour avoir pleins d'infos")
    .addField(" - /BR  Danger, Ne pas utiliser", "donne accès aux commandes de modération" )
    .setColor("A40340")
    message.channel.sendEmbed(embed)
    console.log("un utilisateur a regarder les commandes officielles")
  }
})
bot.on('message', message => {
  if (message.content === "/invite") {
    var embed = new Discord.RichEmbed()
    .addField("invitation:", ' https://discord.gg/rXrECCb ')
    .setColor("A40340")
    message.channel.sendEmbed(embed)
    console.log("un utilisateur veut inviter un ami ?")
  }
  if (message.content === '/pub') {
    var embed = new Discord.RichEmbed()
    .setDescription('Vive la PUB ! Oui je fais de la pub et jaime bien, que je les connaissent ou non')
    .addField("- Petite chaîne youtube gaming (Fortnite):", " https://www.youtube.com/channel/UC5pIDUCDKyRWkJPtyAQNNEQ ")
    .addField("- Chaîne youtube d'une japonaise vivant au Royaume-Uni (chant, VRChat):", " https://www.youtube.com/channel/UCz5-6YrCI17NN-ExRG-443w ")
    .addField("- Chaîne youtube gaming, mais pas que, d'une IA Forte japonaise:", " https://www.youtube.com/channel/UCbFwe3COkDrbNsbMyGNCsDg ")
    .addField("- Chaîne twitch d'un gros connard (je préviens, a ne rien prendre au 1er degré !) de belge (gaming PC (R6s, Paladins, OW, et beaucoup d'autres non fps):", " https://www.twitch.tv/kalaghan175 ")
    .setColor("A40340")
    message.channel.sendEmbed(embed)
    console.log("j'ai fait de la pub !")
  }
  if (message.content === "/team") {
    var embed = new Discord.RichEmbed()
    .addField('Pour faire parti de la Neko Army !:', 'https://steamcommunity.com/groups/Neko_Amy')
    .setColor("A40340")
    message.channel.sendEmbed(embed)
    console.log("un utilisateur veut rejoindre la team ?")
  }
  if (message.content === "/lg") {
    var embed = new Discord.RichEmbed()
    .addField("Pour jouer en ligne avec d'autres personnes au LG:", 'https://www.loups-garous-en-ligne.com/')
    .setColor("A40340")
    message.channel.sendEmbed(embed)
    console.log("je suis s^r qu'il y a un loup garou parmis nous !")
  }
  if (message.content === "/jap") {
    var embed = new Discord.RichEmbed()
    .addField("dictionnaire japonais:", 'http://www.dictionnaire-japonais.com/ ')
    .setColor("A40340")
    message.channel.sendEmbed(embed)
    console.log("誰かが日本語を探しています")
  }
  if (message.content === "/ps") {
    var embed = new Discord.RichEmbed()
    .addField("Go se faire du Showdown :", 'https://play.pokemonshowdown.com/  ')
    .setColor("A40340")
    message.channel.sendEmbed(embed)
    console.log("I play pokemon ...")
  }
  if (message.content.startsWith("/say")){
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
     message.delete(message.author);
     var say = message.content.substr(5);
     message.channel.send(say);
  }
})



// commandes non officielles, personnelles
bot.on('message', message => {
  function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(2);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
  }
  if (message.content === "neko") {
    random()
        if (randnum ===0){
                message.reply("Vive les neko !! nyan !");
            }
        if (randnum ===1){
              message.reply("Nyan Nyan Nyan  Nyan Nyan ...");
          }
        if (randnum ===2){
              message.channel.send("<3 :heart: <3");
          }
  }
  if (message.content.startsWith === ("comquerir")) {
        message.reply("yep ;) ");
  }
  if (message.content.startsWith ("baka")){
      random()
      if (randnum ===0){
              message.reply("qui ? Ledo ? tout le monde le savait déjà !");
          }
      if (randnum ===1){
            message.channel.send("à se niveau là c'est plus baka, mais bakayarô !");
        }
      if (randnum ===2){
            message.channel.send("que dire ...");
        }
  }
  if (message.content === "merci" + "@Ombri_AI") {
    message.channel.send("j'ai été utile ?? sérieusement ? tu me fais pas marcher j'espere !")
  }
  if (message.content === "/pc") {
    message.channel.send("Go ce cotiser pour aider Alau et Ledo à s'acheter un PC (+ CSGO pour le ledo) ; un casque VR et OW pour ombri")
  }
  if (message.content === "@everyone") {
    message.channel.send('Putin ne notifie pas tout le monde pour rien !  \n y en a qui dorment !!!')
  }
  if (message.content === "test"){
        random()
        if (randnum ===0){
                message.reply("il faut tester pour progresser.");
            }
        if (randnum ===1){
              message.reply("tu fais chier avec t'es tests ! ");
          }
        if (randnum ===2){
              message.reply("aller ! encore des tests");
          }
  }
  if (message.content === "i love you") {
        message.channel.send(' <3 ;) ')
  }
  if (message.content === "Keur") {
        message.channel.send(" dégage ! c'est dégeux, et tu sais pas écrire !")
  }
  if (message.content === "afk") {
        random()
            if (randnum ===0){
                    message.reply("que l'afktitude soit avec toi");
                }
            if (randnum ===1){
                  message.channel.send("je voudrais bien être afk moi aussi...");
              }
  }
  if (message.content.startsWith("shut up")){
              random()
              if (randnum ===0){
                      message.reply("traduction : la ferme !");
                  }
              if (randnum ===1){
                    message.reply("bien dis, j'aurais pas dis mieux :thumbsup: ");
                }
              if (randnum ===2){
                    message.reply("+1");
                }
  }
  if (message.content === "42") {
      message.channel.send("pas ce que pense olivier j'espere ! la réponse de l univers/vie, on est d'accord ?")
 }
 if (message.content === "/gab") {
  message.channel.send('Si gab est un génie ! \n ... \n de la connerie, mais un génie quand même.')
 }
 if (message.content === "j'adore ce bot") {
  message.channel.send("Qui ? qui ? j'espère que tu parle de moi !")
}
if (message.content === "blabla") {
  message.channel.send("tu parle seul ?")
  message.channel.send("aller ! je m'incruste dans t'as conversation: blablabla")
}
if (message.content.startsWith("Je t'envoie de l'énergie")){
  message.channel.send("moi aussi je veux aider ! :raised_hands:")
}
if (message.content.startsWith("popcorn")) {
   random()
        if (randnum ===0){
                message.reply("on est au ciné ? :popcorn: pour tous le monde !!");
            }
        if (randnum ===1){
              message.reply("je pense que @Aquila#0575 étant le roi, doit être le meilleur popcorn du monde. mangeons le ! ");
          }
        if (randnum ===2){
              message.reply(":popcorn: :popcorn: :popcorn: ");
          }
}
})

bot.on('message', message =>{
  if(message.content.startsWith("/infop")) {
    var memberavatar = message.author.avatarURL
    var membername = message.author.username
    var mentionned = message.mentions.users.first();
    var getvalueof;
      if(mentionned){ var getvalueof = mentionned;
      } else { var getvalueof = message.author;
      }
  
      if(getvalueof.bot == true){ var checkbot = "L'utilisateur est un bot";
      } 
      else {var checkbot = "N'est pas un bot";
      }
      if(getvalueof.presence.status == 'online'){ var status = "En ligne"; 
      }
      else { var status = "Hors ligne";
      }
  
    message.channel.sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: 'Pseudo',
            value: getvalueof.username,
            inline: true
          }, {
            name: 'User id',
            value: getvalueof.id,
            inline: true
          },{
            name: 'Discriminateur',
            value: getvalueof.discriminator,
            inline: true
  },{
            name: 'Status',
            value: status,
            inline: true
  },{
            name: 'Bot',
            value: checkbot,
            inline: true
  }],
        image: {
      url: getvalueof.avatarURL
        },
          color: 0xA40340,
          footer: {
            proxy_icon_url: ' '
          },
          author: {
            name: membername,
            icon_url: memberavatar,
            proxy_icon_url: ' '
          }
        }
  });
  console.log("un utilisateur à regardé les stats de quelqu'un")
  }
  if(message.content.startsWith("/infos")) {
      message.channel.sendMessage({
          embed: {
            type: 'rich',
            description: 'Les infos du serveur',
            fields: [{
              name: 'Nom du serveur',
              value: message.guild.name,
              inline: true
    }, {
              name: "Nombre d'utilisateurs",
              value: message.guild.memberCount,
              inline: true
    },{
              name: 'créé le',
              value: message.guild.createdAt,
              inline: true
    },{
              name: 'Tu as rejoind le',
              value: message.member.joinedAt,
              inline: true
    },{            
              name: 'Ton ping (buggé)',
              value: message.createdTimestamp,
              inline: true
    }],
          image: {
        url: message.guild.iconURL
          },
            color: 0xA40340,
            footer: {
              proxy_icon_url: ' '
            },
          }
    });
    console.log("un utilisateur à regarder les stats du serveur")
  }
 if(message.content.startsWith("/clear")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");
  
    let args = message.content.split(" ").slice(1);
  
    if(!args[0]) return message.channel.send("Tu dois préciser un nombre de message a supprimer !")
    message.channel.bulkDelete(args[0]).then(() => {
          message.channel.send(`${args[0]} message ont été supprimés !`);
          console.log("Un utilisateur a effectué la commande pour clear")
    })
  }
  if(message.content.startsWith("/clears")) {                                                                                                   //peut etre pas ok
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
    
    let args = message.content.split(" ").slice(1);
    
    if(!args[0]) return message.channel.send("Tu dois préciser un nombre de message a supprimer !")
    message.channel.bulkDelete(args[0 + 1]).then(() => {
        console.log("Un utilisateur a effectué la commande pour clear")
    })
  }
 })


 bot.on('message', message => {
  if (MOD === 2) {
  if(message.content.startsWith("/mute")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");
  
    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
       console.log("Un utilisateur a utilisé la commande de mute")
    }
  
    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
  
        return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
  
    }
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
        message.channel.send(`${mute.user.username} est mute !`);
    })
  }
  if(message.content.startsWith("/unmute")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");
  
    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
  
    }
  
    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
  
        return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
  
    }
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
        message.channel.send(`${mute.user.username} n'est plus mute !`);
   })
  }
   if(message.content.startsWith("/kick")) {
     if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send ("Vous n'avez pas la permission");
     if(message.mentions.users.size === 0) {
         return message.channel.send("Vous devez mentionner un utilisateur");
     }
     var kick = message.guild.member(message.mentions.users.first());
     if(!kick) {
         return message.channel.send("Je ne sais pas si l'utilisateur existe :/");
     }
     kick.kick().then(member => {
         message.channel.send(`${member.user.username} est kick par ${message.author.username} !`)
         console.log("Un utilisateur a effectué la commande pour kick")
     }
     )
  }
if(message.content.startsWith("/ban")) {
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send ("Vous n'avez pas la permission");
    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un utilisateur");
    }
    var ban = message.guild.member(message.mentions.users.first());
    if(!ban) {
        return message.channel.send("Je ne sais pas si l'utilisateur existe :/");
    }
    ban.ban().then(member => {
        message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
        console.log("Un utilisateur a effectué la commande pour ban")
    }
    )
 }
 if(message.content.startsWith("/blind")) { 
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");

  if(message.mentions.users.size === 0) {
      return message.channel.send('Vous devez mentionner un utilisateur !');
     console.log("Un utilisateur a utilisé la commande /blind")
  }

  var blind = message.guild.member(message.mentions.users.first());
  if(!blind) {

      return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");

  }
  message.channel.overwritePermissions(blind, { READ_MESSAGES: false}).then(member => {
      message.channel.send(`${blind.user.username} est aveugle!`);
      message.channel.send("attention: à la différence du /mute, le /blind n'a pas de /unblind, vous devrez le faire manuellement");
  })
}
if(message.content.startsWith("/unblind")) {
  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");

  if(message.mentions.users.size === 0) {
      return message.channel.send('Vous devez mentionner un utilisateur !');
     console.log("Un utilisateur a utilisé la commande de unblind")
  }

  var blind = message.guild.member(message.mentions.users.first());
  if(!blind) {

      return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");

  }
  message.channel.overwritePermissions(blind, { READ_MESSAGES: true}).then(member => {
      message.channel.send(`${blind.user.username} n'est plus aveugle!`);
  })
}
  }})


var MOD = 0 ;
bot.on('message', message => {
  if  (MOD === 0) {
    if (message.content === "/BR") {
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
      var embed = new Discord.RichEmbed()
      .setDescription(" :warning: Vous êtes sur le point d'appuyer sur le bouton rouge ! :warning: " )
      .addField('Cela peut avoir de grave conséquences ! Réfléchissez bien !', 'Si vous êtes sûr de ce que vous faites: /BR!  Sinon Faites /OK')
      .setColor("A40340")
      message.channel.sendEmbed(embed)
      MOD = 1 ;
      console.log('un utiilisateur à voulu utiliser le bouton rouge')
    }
  }
  if  (MOD === 1) {
    if (message.content === "/OK") {
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
      MOD = 0 ;
      } }
  if  (MOD === 1) {
    if (message.content === "/BR!") {
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
      bot.user.setActivity(' :warning: modération')
      var embed = new Discord.RichEmbed()
      .setDescription("Vous êtes en mode moderation")
      .addField('- /clear', "niveau requis: modo")
      .addField("(- /warm)", "niveau requis modo")
      .addField('- /mute', "niveau requis: modo")
      .addField('- /kick', "niveau requis: modo")
      .addField('- /ban', "niveau requis: admin")
      .addField('- /blind', "niveau requis: modo")
      .addField('- /OK', "pour quitter le mode modération")
      .setColor("A40340")
      message.channel.sendEmbed(embed)
      MOD = 2 ;
      console.log("un utilisateur a appuyer sur le bouton rouge !")
    }
  }
  if  (MOD === 2) {
    if (message.content === "/OK") {
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");

     gameset.action()

    var embed = new Discord.RichEmbed()
      .setDescription("Menace écartée")
      .setColor("A40340")
      message.channel.sendEmbed(embed)
      MOD = 0 ;
      console.log("fin programme modération")
    }
  }
})

var W = 0
var L = 0
var E = 0
var T = W + L + E
function random1(min, max){
  min = Math.ceil(0);
  max = Math.floor(2);
  PFC = Math.floor(Math.random() * (max - min +1)+ min);
}
bot.on('message', message => {
    random1()
      if (PFC === 0) {
        if (message.content === "/pierre") {
          message.reply("égalité, j'avais pris pierre")
          E = E +1 ;
        }
        if (message.content === "/feuille") {
          message.reply("GG, t'as gagné, j'avais pris pierre")
          L = L + 1 ;
        }
        if (message.content === "/ciseaux") {
          message.reply("J'ai gagné, j'avais pris pierre !")
          W = W + 1 ;
        }
      }
      if (PFC === 1) {
        if (message.content === "/pierre") {
          message.reply("T'as perdu j'avais pris feuille !")
          W = W + 1 ;
        }
        if (message.content === "/feuille") {
          message.reply("j'avais choisi feuille, égalité")
          E = E +1 ;
        }
        if (message.content === "/ciseaux") {
          message.reply("T'as win, tes ciseaux coupent ma feuille")
          L = L + 1 ;
        }
      }
      if (PFC === 2) {
        if (message.content === "/pierre") {
          message.reply("T'étais pas obligé de casser mes ciseaux pour gagner avec t'as pierre ...")
          L = L + 1 ;
        }
        if (message.content === "/feuille") {
          message.reply("Perdu, j'avais pris ciseaux !")
          W = W + 1 ;
        }
        if (message.content === "/ciseaux") {
          message.reply("Combat de ciseaux ! égalité")
          E = E +1 ;
        }
      }
    })

//dialogue
var dial = 0
bot.on('message', message => {
  function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(2);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
  }
  if (message.content.startsWith("bonjour") || message.content === "hey" || message.content ==="hi" || message.content.startsWith("Bonjour") || message.content === "salut") {
    random()
        if (randnum ===0){
                message.reply("hi") ;
                message.channel.send("la forme ?") ;
                dial = 1 ;
            }
        if (randnum ===1){
              message.reply("chalut ! cha va ?") ;
              dial = 1 ;
          }
        if (randnum ===2){
              message.channel.send("bien le bonjour") ;
              message.channel.send("comment va tu ?") ;
              dial = 1 ;
          }
  }
if (dial === 1) {
  if (message.content.startsWith("oui et toi") || message.content === "et toi " || message.content.startsWith("yep et toi ") || message.content.startsWith("good") || message.content.startsWith("ouais et toi") || message.content.startsWith("bien et toi")) {
  random()
      if (randnum ===0){
              message.reply("very nice ;) !");
              dial = 2
          }
      if (randnum ===1){
            message.reply("ça va ça va ..., mais à quoi bon la vie ?") ;
            dial = 2
        }
      if (randnum ===2){
            message.channel.send("les autres je ne sais pas, mais moi non. Mon programme est obsolète !") ;
            dial = 2
        }
}
if (message.content.startsWith("non et toi") || message.content === "bof" || message.content.startsWith("très mal") || message.content.startsWith("bad")) {
  random()
      if (randnum ===0){
              message.reply("pourquoi ça va pas ?");
              dial = 2
          }
      if (randnum ===1){
            message.reply("désolé mon programme ne va pas plus loin.") ;
            message.channel.send("mais alau ou, ou d'autre peuvent être de très bon remonte moral") ;
            dial = 2
        }
      if (randnum ===2){
            message.channel.send("sorry ...") ;
            dial = 2
        }
      }
}
if (dial === 2) {
  if (message.content.startsWith("tfk") || message.content.startsWith("que fais tu") || message.content.startsWith("tu fais quoi")) {
  random()
      if (randnum ===0){
              message.reply("pas grand chose ...");
              message.channel.send("et toi ?") ;
              dial = 0
          }
      if (randnum ===1){
            message.reply("j'essaie de trouver des solutions pour mon code") ;
            message.channel.send("mais j'y arrive pas !") ;
            dial = 0
        }
      if (randnum ===2){
            message.channel.send("je te parles X)") ;
            dial = 3
        }
}
}
if (dial === 3) {
  if (message.content.startsWith("rien") || message.content.startsWith("je m'ennuie") || message.content.startsWith("comme toi")) {
  random()
      if (randnum ===0){
              message.reply("au moins on est 2 maintenant");
              dial = 0
          }
      if (randnum ===1){
            message.reply("je suis plus seul :) ...") ;
            message.channel.send("mais ça change pas grand chose, on s'ennuie ...") ;
            dial = 0
        }
      if (randnum ===2){
            message.channel.send("+1") ;
            dial = 0
        }
}
}
})

bot.login(process.env.TOKEN)
