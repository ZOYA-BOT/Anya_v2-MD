const { readFileSync } = require('fs')
require('dotenv').config({path: './mongo.env'});
require('dotenv').config({path: './owner.env'});
require('dotenv').config({path: './session.env'});
require('dotenv').config({path: './bot.env'});

module.exports = {
    /**
     * bot details and parameters
     */
    botname: process.env.BotName || "Qᴜᴇᴇɴ ᴀɴʏᴀ ᴍᴅ",
    footer: process.env.Footer || "*© ᴘᴏᴡᴇʀᴅ ʙʏ ᴍʀ ᴋᴀʟᴀɴᴀ ᴏꜰᴄ*",
    prefa: process.env.Prefix || ".",
    themeemoji: process.env.ThemeEmoji || "🎐",

    /**
     * owner details and parameters
     */
    ownername: process.env.OWNER_NUMBER || process.env.Owner_Name || "ᴍʀ ᴋᴀʟᴀɴᴀ ᴏꜰᴄ",
    ownernumber: process.env.Owner_Number || "94702932200",
    instagramId: process.env.Insta || "",

    /**
     * other details and parameters
     */
    author: process.env.Author || "ᴍʀ ᴋᴀʟᴀɴᴀ ᴏꜰᴄ",
    packname: process.env.PackName || "𝒬𝒰𝐸𝐸𝒩 𝒵💞𝒴𝒜 𝑀𝒟",
    socialLink: process.env.Web || "https://github.com/PikaBotz",
    groupLink: process.env.GcLink || "https://wa.me/+94702932200?text=*%E0%B7%84%E0%B7%99%E0%B6%BD%E0%B7%9D_%E0%B7%83%E0%B7%9D%E0%B6%BA%E0%B7%8F...%F0%9F%91%BB_%E0%B6%9A%E0%B7%9C%E0%B7%84%E0%B7%9C%E0%B6%B8%E0%B6%AF_%E0%B6%89%E0%B6%AD%E0%B7%92%E0%B6%B1%E0%B7%8A...%F0%9F%A4%AD*",
    warns: Number(process.env.Warn_Limits) || 3,
    cooldown: Number(process.env.Cooldown_Timer_Seconds) || 5, // default cooldown time per command in seconds
    mongoUrl: process.env.MongoDB || "mongodb://mongo:ZHOmjVqNehJsRkRBDZywZvMEOKlKINCP@mongodb.railway.internal:27017",
    sessionId: process.env.SESSION_ID || "7RPc3p1xz_A_N_Y_A_V_2_LZMZ45Dh0th",

    
    
    //༺------------------------------------------------------------------------------------------------
    /**
     * thumbnails and medias
     */
    image_1: readFileSync('./lib/Assets/image_1.jpg'), // primary image
    image_2: readFileSync('./lib/Assets/image_2.jpg'), // secondry image
    imageUrl: "https://i.ibb.co/ZKKSZHT/Picsart-23-06-24-13-36-01-843.jpg", // image url, to replace to your url upload your image to https://imgbb.com
    imageMentionUrl: "https://i.ibb.co/ZKKSZHT/Picsart-23-06-24-13-36-01-843.jpg", // image for mention reply audio media
    aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
    menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
    ownerMentionMp3: readFileSync('./lib/Assets/ownerMentionMp3.mp3'),  // audio for mention reply audio media

    /**
     * core parameters and values
     */
    ownercon: { key: { fromMe: false, participant: '0@s.whatsapp.net', ...({ remoteJid: 'status@broadcast' }), }, message: { contactMessage: { displayName: this.ownername, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${this.ownername},;;;\nFN:${this.ownername}\nitem1.TEL;waid=${this.ownernumber}:${this.ownernumber}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, jpegThumbnail: this.image_2, thumbnail: this.image_2, sendEphemeral: true } } },
    fakeshop: { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { orderMessage: { itemCount: 1234, status: 200, thumbnail: this.image_1, surface: 200, message: this.botname, orderTitle: this.ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore: 999, isForwarded: true}, sendEphemeral: true },
    message: {
        success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
        admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
        botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
        owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
        group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
        private: 'This command is only for private chats.',
        wait: '🔄 Processing request...',
        error: "❌ Oops! An error occurred while processing your request. Please try again later.",
        ban: `You're banned from using this bot!`,
        nsfw: 'This group is not *NSFW* enabled.',
        banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
    },
    Port: process.env.Port || "8080",
}

global.connectionMessageSent = false;
global.game = {
    tictactoe: {}
}
