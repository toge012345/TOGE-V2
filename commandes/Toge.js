"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "Toge", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Yes you called me whats up Ok anyway support me by following my channel and subscribing on my whatsapp channel 🙏 \n\n ' + "║❒ 𝙒𝘼𝘾𝙃𝘼𝙉𝙉𝙀𝙇 https://whatsapp.com/channel/0029VaYtF0Z2975CYz9Fmv2k";
    let d = '                                     ║❒ 𝐆𝐫𝐨𝐮𝐩 https://chat.whatsapp.com/JQ4s2pJuBReE7YL9wKJPHo';
    let varmess = z + d;
    var jpg = 'https://telegra.ph/file/ee1d72d6e59b22b99216e.jpg';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
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
   let z ='Salut je m\'appelle *BMW-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *BMW-MD-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/13d63c21c1a665bfd8324.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
