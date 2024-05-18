"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "bmw", reaction: "🚗", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝐓𝐡𝐢𝐬 𝐢𝐬 𝐓𝐎𝐆𝐄-𝐌𝐃 𝐛𝐨𝐭 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐓𝐎𝐆𝐄 𝐈𝐍𝐔𝐌𝐀𝐊𝐈🥷 🚗 \n\n ' + "𝐑𝐞𝐩𝐨 https://github.com/toge012345/TOGE-V2 ";
    let d = '𝐆𝐫𝐨𝐮𝐩 https://chat.whatsapp.com/JQ4s2pJuBReE7YL9wKJPHo';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/ecb1fdbedd03424f2cd4c.jpg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")

async(Void, citel, text, isAdmins) => {
Void.sendMessage(citel.chat, { 
              react: { 
                  text: "🚘", 
                  key: citel.key 
              } 
          }) 
          await Void.sendPresenceUpdate('recording', citel.chat);
          await Void.sendMessage(citel.chat, { audio: {url : 'https://a.uguu.se/lOZETVDW.mp4'',}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, });
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
