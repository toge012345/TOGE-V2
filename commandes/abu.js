"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "abu", reaction: "🚗", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐌𝐲 𝐝𝐞𝐚𝐫 😍 𝐓𝐡𝐢𝐬 𝐢𝐬 *𝐓𝐎𝐆𝐄-𝐌𝐃*  𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 *𝙏𝙊𝙂𝙀 𝙄𝙉𝙐𝙈𝘼𝙆𝙄*🥷 𝗣𝗹𝗲𝗮𝘀𝗲 𝗚𝗶𝘃𝗲 𝗮 𝗦𝘁𝗮𝗿 ✨ 𝗢𝗻 𝗧𝗵𝗲 𝗥𝗲𝗽𝗼 𝗔𝗻𝗱 𝗙𝗼𝗿𝗸 𝗜𝘁 🚗 \n\n ' + "𝐑𝐞𝐩𝐨 https://github.com/toge012345/TOGE-V2";
    let d = '𝐆𝐫𝐨𝐮𝐩 https://chat.whatsapp.com/JQ4s2pJuBReE7YL9wKJPHo';
    let varmess = z + d;
    var mp3 = 'https://s31.aconvert.com/convert/p3r68-cdx67/7uiwm-6zr16.mp3'';
    await zk.sendMessage(dest, { audio: { url: mp3 }, caption: varmess });
    //console.log("montest")
    
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *TOGE-V2-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *TOGE-V2-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/13d63c21c1a665bfd8324.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
