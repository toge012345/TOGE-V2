const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/toge");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//toge");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
┏━━━━━━━━━⍟${s.BOT}⊛━━━━━━━
┃   𝐏𝐫𝐞𝐟𝐢𝐱 : ${s.PREFIXE}
┃   𝐎𝐰𝐧𝐞𝐫 : ${s.OWNER_NAME}
┃   𝐌𝐨𝐝𝐞 : ${mode}
┃   𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 : ${cm.length}
┃   𝐃𝐚𝐭𝐞 : ${date}
┃   𝐇𝐨𝐮𝐫 : ${temps}
┃   𝐌𝐞𝐦𝐨𝐢𝐫𝐞 : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃   𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : ${os.platform()}
┗━━━━━━━━━━━⊛ \n\n`;
    
let menuMsg = `
𝙝𝙞𝙞𝙞 ${nomAuteurMessage} 👋

┏━━━━━━━⍟
┃ 𝗮𝗹𝗹 𝗺𝗲𝗻𝘂 :
┗━━━━━━━⊛
`;

    for (const cat in coms) {
        menuMsg += `┏━━━━━⍟ ${cat} ⊛`;
        for (const cmd of coms[cat]) {
            menuMsg += `
┃ ${cmd}`;
        }
        menuMsg += `
┗━━━━━━━━━━━━━━━⊛ \n`
    }

    menuMsg += `
◇            ◇

"━━━━━━━━━━━━━━⍟

*⭐️Type:* _${prefixe}menu command.
*Eg:* _${prefixe}owner_"
 
 *Made in TOGE-MD*
                                                
━━━━━━━━━━━━━━━⊛
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "I am *TOGE-V2*, developed by toge inumaki "" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "I am *TOGE-V2*, developed by toge inumaki "" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
