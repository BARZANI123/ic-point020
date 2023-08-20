
const { Client, Collection , MessageActionRow , MessageButton , MessageSelectMenu , Modal , TextInputComponent , MessageEmbed } = require("discord.js");
let db = require('pro.db')
const client = new Client({
  intents: 32767
}).setMaxListeners(0);





client.on('ready' , async() => {
  console.log(`================`)
  console.log(``)
  console.log(`Bot Name : ${client.user.username}`)
  console.log(`Bot Tag : ${client.user.tag}`)
  console.log(`Bot Id : ${client.user.id}`)
  console.log(`Servers Count : ${client.guilds.cache.size}`)
  console.log(`Users Count : ${client.guilds.cache
.reduce((a, b) => a + b.memberCount, 0)
.toLocaleString()}`)
  console.log(``)
  console.log(`================`)
  var statuses = [`IC Store`];
var timers = 2;
  var timeing = Math.floor(timers * 1000);
  setInterval(function() {
    var lengthesof = statuses.length;
    var amounter = Math.floor(Math.random() * lengthesof);
    client.user.setActivity(statuses[amounter], { type: 'STREAMING', url: 'https://www.twitch.tv/userend_?sr=a' });
  }, timeing);
})

// تحديد وقت تنفيذ الدالة كل 10 ثواني (10000 مللي ثانية)
const interval = setInterval(autoKill, 10000);

// دالة لتنفيذ الإجراء المطلوب (مثال)
function autoKill() {
  // الكود الخاص بالعملية التي تريد القيام بها كل 10 ثواني
  console.log('Auto-kill every 10 seconds');
}

// لإيقاف تنفيذ الدالة المحددة في الوقت المناسب
// clearInterval(interval);




function restart() {
  console.log('Restarting the application...');
  
}

setInterval(restart, 60 * 1000); 



                              
const prefix = "$"

client.login(`MTExNzQ1MTU1Mjc1NjYxNzI4Nw.GzYi96.77B0Bi4ymG1xRO_WlInZTmZGkbgst916GQlqro`).catch(() => {
console.log("Token Invalid")
})
////var
let co = "#f4b115"

const line = "https://cdn.discordapp.com/attachments/980884096232345620/1112002341747564644/New_Element_Copy_569C7FE.gif"


////Var Points Log


const feedbackroom = "1132415111991144582" /// feedback room
const offersroom = "1132415111991144578" /// discount room
const logroom = "1135295114307178606" /// discount room log
const logroom1 = "1135295420319404052" /// response log
const logroom2 = "1135295669205225603" /// feedback log
const logroom3 = "1135295332905918494" /// ticket close log
const logroom4 = "1135295768903815268" /// apply test log
const logroom5 = "1135295231487660092" /// warn  log
const teamrole = "1132415108228853863" ///  seller role
const teamrole1 = "1132415108228853863" /// ticket close role 
const teamrole2 = "1132415108254011415" /// apply test role
const teamrole3 = "1141818291032182814" /// warn role





client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != offersroom) return;
  if(!message.member.roles.cache.has(teamrole)) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (5 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
  db.add(`offers_${message.author.id}` , 1)
  message.guild.channels.cache.get(logroom).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Offers Point Gived To : ${message.author}`)
  ]})
}) 
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(!message.member.roles.cache.has(teamrole)) return;
  if(message.content === "farmw" || message.content === "Farmw" || message.content === "farmu" || message.content === "Farmu" || message.content === "frmw" || message.content === "Frmw" || message.content === "Farmo" || message.content === "farmo" || message.content === "Welcome" || message.content === "welcome" || message.content === "wlc" || message.content === "Wlc" || message.content === "Wlcm" || message.content === "wlcm" || message.content === "فەرموو" ) {
    if(!message.channel.name.startsWith("ticket")) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (3 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
    
      message.guild.channels.cache.get(logroom1).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New to reply  Ticket Point Gived To : ${message.author}`)
  ]})
  }
}) 

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.channel.id != feedbackroom) return;
      let role = message.guild.roles.cache.get("1132415108228853863")
    message.member.roles.add(role)
  let user = message.mentions.members.first();
  if(message.author.id == user.id) return;
  let pointSs = db.get(`points_${user.id}`)
  if( pointSs == null) {
      await db.set(`points_${user.id}` , {
    userId : user.id,
    count : 0
  })
  }
  let points = db.get(`points_${user.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (7 * 1))
  await db.set(`points_${user.id}` , {
    userId : user.id,
    count : po
  })
  db.add(`feedback_${user.id}` , 1)
    message.guild.channels.cache.get(logroom2).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New  Feedback Gived To : ${user}

> By Client : ${message.author}`)
  ]})
}) 



//// $close || ticket/by/need

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.content === "$close") {
  if(!message.channel.name.startsWith("ticket")) return;
    if(!message.member.roles.cache.has(teamrole1)) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (3 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
  db.add(`close_${message.author.id}` , 1)
  message.guild.channels.cache.get(logroom3).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Close Point Gived To : ${message.author}`)
  ]})
    } 
}) 

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.content === "$close") {
  if(!message.channel.name.startsWith("need")) return;
    if(!message.member.roles.cache.has(teamrole1)) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (3 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
  db.add(`close_${message.author.id}` , 1)
  message.guild.channels.cache.get(logroom3).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Close Point Gived To : ${message.author}`)
  ]})
    } 
}) 
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.content === "$close") {
  if(!message.channel.name.startsWith("by")) return;
    if(!message.member.roles.cache.has(teamrole1)) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (3 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
  db.add(`close_${message.author.id}` , 1)
  message.guild.channels.cache.get(logroom3).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Close Point Gived To : ${message.author}`)
  ]})
    } 
}) 
////apply test 
client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.content === "Dnn") {
  if(!message.channel.name.startsWith("ticket")) return;
    if(!message.member.roles.cache.has(teamrole2)) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (5 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
  db.add(`apply_${message.author.id}` , 1)
  message.guild.channels.cache.get(logroom4).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Dn Apply Point Gived To : ${message.author}`)
  ]})
    } 
}) 


client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.content === "Dnn") {
  if(!message.channel.name.startsWith("need")) return;
    if(!message.member.roles.cache.has(teamrole2)) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (5 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
  db.add(`apply_${message.author.id}` , 1)
  message.guild.channels.cache.get(logroom4).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
>New Dn Apply Point Gived To : ${message.author}`)
  ]})
    } 
}) 

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.content === "dnn" || message.content === "Dnn" || message.content === "Done" || message.content === "done") {
  if(!message.channel.name.startsWith("by")) return;
    if(!message.member.roles.cache.has(teamrole2)) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (5 * 1))
  await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : po
  })
  db.add(`apply_${message.author.id}` , 1)
  message.guild.channels.cache.get(logroom4).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Dn Apply Point Gived To : ${message.author}`)
  ]})
    } 
}) 

client.on('messageCreate' , async(message) => {
  if(message.content === "Dnn") {
 if(!message.channel.name.startsWith("ticket")) return;   
    message.channel.send(`$close`)
  }
})

///warns 

client.on('messageCreate' , async(message) => {
  if(message.author.bot) return;
  if(message.content.includes('Mention')) {
  if(!message.channel.name.startsWith("〢・𝐓𝐞𝐚𝐦・𝐖𝐚𝐫𝐧𝐬")) return;
    if(!message.member.roles.cache.has(teamrole3)) return;
  let pointSs = db.get(`points_${message.author.id}`)
  if( pointSs == null) {
      await db.set(`points_${message.author.id}` , {
    userId : message.author.id,
    count : 0
  })
  }
  let points = db.get(`points_${message.author.id}`)
  let poi = points.count
  let po = Math.floor((poi * 1) + (4 * 1))
  await db.set(`points_${message.author.id}` , {
   userId : message.author.id,
    count : po
  })
  db.add(`warn_${message.author.id}` , 1)
  message.guild.channels.cache.get(logroom5).send({embeds: [
    new MessageEmbed()
    .setColor(co)
    .setTitle("New Notification")
    .setDescription(`
> New Warn Point Gived To : ${message.author}`)
  ]})
    } 
}) 


///points 
client.on('messageCreate', async (message) => {
  if (message.content === prefix + "top") {
  let pointsArr = [];
  message.guild.members.cache.forEach(member => {
    let points = db.get(`points_${member.id}`);
    if (points != null) {
      pointsArr.push({id: member.id, points: points.count});
    }
  });

  // ترتيب الأعضاء بناءً على النقاط
  pointsArr.sort((a, b) => b.points - a.points);

  // جلب أول 10 أعضاء
  let topTen = pointsArr.slice(0, 15);

  // جلب أسماء الأعضاء وإضافة النقاط لرسالة واحدة
  let topTenMessage = "";
  topTen.forEach((member, index) => {
    let name = message.guild.members.cache.get(member.id).displayName;
    topTenMessage += `${index + 1}・__${name}__  ~~${member.points}~~\n`;
  });

  message.reply(`**__𝖳𝗁𝗂𝗌 𝖬𝖾𝗌𝗌𝖺𝗀𝖾 𝖤𝗑𝗉𝗅𝖺𝗂𝗇 𝖳𝗁𝖾 𝖥𝗂𝗋𝗌𝗍 𝟣𝟢 𝖯𝖾𝗈𝗉𝗅𝖾 𝖨𝗇 𝖳𝗈𝗉 𝖯𝗈𝗂𝗇𝗍__
\n${topTenMessage}

__${message.guild.name} 𝖲𝗍𝗈𝗋𝖾 𝖮𝗇 𝖳𝗈𝗉__**`);
} else if (message.content === prefix + "rankk") {
  let userPoints = db.get(`points_${message.author.id}`);
  if (userPoints == null) {
    message.channel.send("You have no points yet!");
  } else {
    message.channel.send(`Your points: ${userPoints.count}`);
  }
}
  })




client.on('messageCreate', async(message) => {
  if(message.author.bot) return;

  const args = message.content.split(' ');
  if(args[0] === prefix + "addpoint") {
    const owner = ["942004618467115018","579644676609671168"]  
    if(!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Ship**`);

    const user = message.mentions.members.first();
    if(!user) return message.reply("**Please mention a valid user**");

    const pointsToAdd = parseInt(args[2]);
    if(isNaN(pointsToAdd)) return message.reply("**Please provide a valid number**");

    const userPoints = await db.fetch(`pointsss_${user.id}`);
    db.add(`pointsss_${user.id}`, pointsToAdd);

    message.reply(`**Added ${pointsToAdd} points to ${user.displayName}**`);
  }
  
if(args[0] === prefix + "removepoint") {
const owner = ["942004618467115018","579644676609671168"]  
    if(!owner.includes(message.author.id)) return message.reply(`**This Command Only Owners Ship**`);
  
    const user = message.mentions.members.first();
    if(!user) return message.reply("**Please mention a valid user**");

    const pointsToRemove = parseInt(args[2]);
    if(isNaN(pointsToRemove)) return message.reply("**Please provide a valid number**");

    const userPoints = await db.fetch(`pointsss_${user.id}`);
    if(!userPoints || userPoints < pointsToRemove) return message.reply("**This user doesn't have enough points**");

    db.subtract(`pointsss_${user.id}`, pointsToRemove);

    message.reply(`**Removed ${pointsToRemove} points from ${user.displayName}**`);
}


  
  if(message.content === prefix + "point") {
    if(!message.member.roles.cache.has(teamrole)) return message.reply("**This Command For Only Seller**")
    let pointss = db.get(`points_${message.author.id}`)
    if (pointss == null) {
      return message.reply(`**𝖧𝖾𝗒 <@${message.member.id}> 

      𝖸𝗈𝗎 𝖣𝗈𝗇'𝗍 𝖧𝖺𝗏𝖾 𝖤𝗇𝗈𝗎𝗀𝗁 𝖯𝗈𝗂𝗇𝗍𝗌 𝖨𝗇 ~~${message.guild.name}~~

      𝖯𝗅𝗌 𝖲𝗁𝗈𝗐 𝖳𝗁𝗂𝗌 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 𝖳𝗈 𝖪𝗇𝗈𝗐 𝖧𝗈𝗐 𝖳𝗈 𝖦𝖾𝗍 𝖯𝗈𝗂𝗇𝗍 <#1119934712505454612>**`);
    }

    let points = pointss.count;
    let fb = db.get(`feedback_${message.author.id}`)
    if(fb == null) fb = 0

    let close = db.get(`close_${message.author.id}`)
    if(close == null) close = 0

    let apply = db.get(`apply_${message.author.id}`)
    if(apply == null) apply = 0

    let warn = db.get(`warn_${message.author.id}`)
    if(warn == null) warn = 0

    let offers = db.get(`offers_${message.author.id}`)
    if(offers == null) offers = 0

    let pointsss = db.get(`pointsss_${message.author.id}`)
    if(pointsss == null) pointsss = 0

    message.reply(`**𝖧𝖾𝗒 Seller 𝖨𝗇 __~~${message.guild.name}~~__ 𝖲𝗍𝗈𝗋𝖾

    𝖡𝖾𝗅𝗈𝗐 𝗌𝗁𝗈𝗐𝗌 𝗒𝗈𝗎 𝖺𝗅𝗅 𝗒𝗈𝗎𝗋 𝗉𝗈𝗂𝗇𝗍𝗌 𝗂𝗇 𝗈𝗎𝗋 𝗌𝖾𝗋𝗏𝖾𝗋 𝖳𝗈 𝖲𝖾𝗅𝗅𝖾𝗋 __${message.member.displayName}__

𝖳𝗁𝗂𝗌 𝖯𝗈𝗂𝗇𝗍 𝖥𝗈𝗋 __${message.member.displayName}__

» 𝖳𝗈𝗍𝖠𝗅 𝖯𝗈𝗂𝗇𝗍 : ${points}  +  𝖠𝖽𝖽𝖾𝖽 𝖯𝗈𝗂𝗇𝗍 ${pointsss} = ${points + pointsss}

\`\`\`
-
\`\`\`
・𝖥𝖾𝖾𝖽𝖡𝖺𝖼𝗄 𝖯𝗈𝗂𝗇𝗍 :  ${fb}

・𝖢𝗅𝗈𝖲𝖾 𝖯𝗈𝗂𝗇𝗍 : ${close}

・𝖠𝗉𝗉𝖫𝗒 𝖯𝗈𝗂𝗇𝗍 : ${apply}

・𝖶𝖺𝗋𝖭 𝖯𝗈𝗂𝗇𝗍 : ${warn}

・𝖮𝖿𝖿𝖤𝗋𝗌 𝖯𝗈𝗂𝗇𝗍 : ${offers}**`)
  message.channel.send(line)
      }
})  


client.on('messageCreate', async (message) => {
  if (message.content === prefix + "topp") {
    let playersArr = [];
    message.guild.members.cache.forEach(member => {
      let points = db.get(`points_${member.id}`);
      let pointsss = db.get(`pointsss_${member.id}`); // جلب قيمة المتغير الجديد
      if (points != null && pointsss != null) { // التحقق من وجود قيمتي المتغيرين
        playersArr.push({id: member.id, points: points.count, pointsss: pointsss}); // إضافة المتغير الجديد إلى الكائنات
      }
    });
if(pointsss = null) pointss = 0
    // ترتيب الأعضاء بناءً على النقاط
    playersArr.sort((a, b) => b.points - a.points);

    // جلب أول 10 أعضاء
    let topTen = playersArr.slice(0, 10);

    // جلب أسماء الأعضاء وإضافة النقاط والمستويات لرسالة واحدة
    let topTenMessage = "";
    topTen.forEach((player, index) => {
      let name = message.guild.members.cache.get(player.id).displayName;
      topTenMessage += `${index + 1}・__${name}__ <a:LG137:1101767627904405584>~~${player.points} ~~ + ~~${player.pointsss}~~\n = ~~ ${player.points + player.pointsss}~~ 
`; // إضافة المتغير الجديد إلى الرسالة
    });

    message.reply(`**__𝖳𝗁𝗂𝗌 𝖬𝖾𝗌𝗌𝖺𝗀𝖾 𝖤𝗑𝗉𝗅𝖺𝗂𝗇 𝖳𝗁𝖾 𝖥𝗂𝗋𝗌𝗍 𝟣𝟢 𝖯𝖾𝗈𝗉𝗅𝖾 𝖨𝗇 𝖳𝗈𝗉 𝖯𝗈𝗂𝗇𝗍__<a:HE:1101768824489005086>
\n${topTenMessage}

__${message.guild.name} 𝖲𝗍𝗈𝗋𝖾 𝖮𝗇 𝖳𝗈𝗉__**`);
} else if (message.content === prefix + "rank") {
  let userPoints = db.get(`points_${message.author.id}`);
  if (userPoints == null) {
    message.channel.send("You have no points yet!");
  } else {
    message.channel.send(`Your points: ${userPoints.count}`);
  }
}
  })

const ship = ["942004618467115018","579644676609671168"]
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const args = message.content.split(' ');
  if (args[0] === prefix + "addpointt") {
const owner = ["942004618467115018","579644676609671168"]  
    if(!owner.includes(message.author.id)) return message.reply(`**This Command Only For Owner**`);
    if (args.length !== 3 || !message.mentions.users.first()) return message.reply("**Pls Mention And Write Count Point**");

    let targetUser = message.mentions.users.first();
    let pointsToAdd = parseInt(args[2]);

    let pointSs = db.get(`points_${targetUser.id}`);
    if (pointSs == null) {
      await db.set(`points_${targetUser.id}`, {
        userId: targetUser.id,
        count: 0
      });
    }

    let points = db.get(`points_${targetUser.id}`);
    let currentPoints = points.count;
    let newPoints = currentPoints + pointsToAdd;

    await db.set(`points_${targetUser.id}`, {
      userId: targetUser.id,
      count: newPoints
    });

    db.add(`offers_${targetUser.id}`, 1);

    message.guild.channels.cache.get(logroom).send({
      embeds: [
        new MessageEmbed()
          .setColor(co)
          .setTitle("Add Points")
          .setDescription(`> Done Added Point To ${targetUser}`)
      ]
    });
    message.reply(`**Done Added ${pointsToAdd} To ${targetUser}**`)
  }
});
