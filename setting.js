const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With JERRY-MD Hear
SESSION_ID: process.env.SESSION_ID || "JERRY-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0lxY3UwNksxZWdsUWxydVB4eDlOTjRrTU1JYXA3bWNuaXB5N1VITjJYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEJmYkJUcllnV3ZrTC93WmdqdHBkWmZqWXNzMXJ5TGs2Y21YQ1lCaHAxdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQVEwbDdubWFCWUVRUm83YUJkZWZQa2pqa3JWS3E2bVhrcU50MnJXOEVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRbjVMM1l1TmhreFdxcDNUQnBNa3RGU0lNL2lScm9LYmtFUFlJcHRiZlN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRGUVpNSlB4aHhiSU51Q0pKZGdJNHUzR1ZKM1pZNnpsY1dnSkVvT2JTVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhDVHRUZjZOMkJmaWFDQ2RsbTdNdk5RNnZuRXJhRE95N1cwNFZBYjJXeEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNHaTNpeXZkYlNCK1VmS3kxMHpKTTcyTk9jNVRoUWl6ZGRsS09adUdYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0tPZERLWFhOSVNDRDJLMFdqRUtMZTF0WWdvQUJhaVlzTlQ3QXRNeWV5OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im41WXRETkhwWW4vQktqTDNrOXdSZE5ib1F4TEZRRlQwN3ZTTy9TSEJxQXZDZHc1MWZvcllFZlFBcjYrdDdTbjBPZWlRdFpnWnBPZjZLekxEUXJGbml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6Ikd2MXl3bExKZFhPQVJPMUl6U3JQVGdHc3pHcWJRcSt0d0dPTCtDTVBLN0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjkwODIyMTA3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzRFNTBGMTM3OEQ3QzRFQUE1QTcyM0JGOEMwRjJEMyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc3Nzc3MDc4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyOTA4MjIxMDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDOEU3OUY5Nzg0NUE0NjQ3OEQ4Qzg4QTEzRDg2M0FDIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Nzc3NzcwNzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5MDgyMjEwN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUMwOTdFOUMxMUZBM0NFM0ExMTA1Nzc5MzExMUZDMzQiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3Nzc3NzA3OX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTQkFUQjczNCIsIm1lIjp7ImlkIjoiOTIzMjkwODIyMTA3OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTI1NzQ5NTUxNDc0NDE6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lETzEvVURFSzd6MnM4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhxeWFKWWRxc21JMU9PZU45OG5RalkxZVk3L1F6VzM2cUhidHN1cUdhRlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZ2UEl4N3BLY3huYXhvaTFGQ1gyYkVhVXFUaFJHSk9FN2JRN0FrUDlHOGIyUnlpNXI4YjhGRFduL0U5SFVyajZZU0lpK1Bla2tBRlNxWnJoQ2N4UkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQQ29kTFBrQkJFL25zOFB4NS9hR0tNVkYrKzdOYzRSeURxVDlLSzBWNTVkSUVlRDBPSWxJTTlKdlltbFh5OGxjbGI1Q1RWd0JEcEZZb2JySWlEWmhpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE1MjU3NDk1NTE0NzQ0MToxQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSNnNtaVdIYXJKaU5Uam5qZmZKMEkyTlhtTy8wTTF0K3FoMjdiTHFobWhWIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQlFnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Nzc3NzcwNzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3lpIn0=",
// JERRY MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// JERRY MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY JERRY-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "JERRY-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "JERRY-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923117298271",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "INNOCENT JERRY",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







