
let path = require('path')
let fs = require('fs')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let tum = fs.readFileSync('./src/elaina2.jpeg')
let tum2 = fs.readFileSync('./src/emror.jpeg')
let tum3 = fs.readFileSync('./ah1.jpeg')
const { MessageType} = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let { performance } = require('perf_hooks')
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `Runtime\n${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
					runtime = process.uptime()
					teks = `${kyun(runtime)}`
global.owner = ['923133997412', '0', '436506665652696', '6283820073017', '6289637133848'] // Your main and backup numbers
global.fake = ['923000112233', '0', '0', '0'] // Used for "fake" features if needed
global.fakeNum = ['923000112233', '0'] // Duplicate or temporary numbers
global.mods = ['923133997412'] // Moderators - give yourself admin powers
global.prems = ['923133997412'] // Premium users get unlimited limits

global.APIs = { // Add your APIs if needed (optional)
  // example: 'zenz': 'https://zenzapis.xyz'
}

  lol: 'https://api.lolhuman.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Dehan: 'https://dhnjing.xyz',
  Velgrynd: 'https://api.ichikaa.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': 'Deffbotz',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'Nyarlathotep',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://dhnjing.xyz': 'e2645065aaced89861b4'
}

// Sticker WM
global.botwm = `©Ran_2022`//UBAH JADI NAMAMU
global.botdate = `╭──────────═┅═─────────\n│◪ ${time}\n┊◪ ${week} ${date}\n╰──────────═┅═─────────`
global.packname =  `Ran`
global.author = `Mitake`
global.wait = 'Subscribe Ya\n bit.ly/Papah-Chan'
global.dga = 'Jika Ingin Membeli Limit\nSilahkan Ketik #buy 1'
global.thumb = tum
global.thumb2 = tum2
global.thumb3 = tum3
global.wm = `©Ran`

global.runtime = teks
global.multiplier = 69 // The higher, The harder levelup
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
