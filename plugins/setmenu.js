let handler = async (m, { itsu, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      itsu.menu = text
      itsu.reply(m.chat, '✅ Full menu has been set successfully.\n' + info, m)
    } else {
      itsu.menu = {}
      itsu.reply(m.chat, '🔄 Full menu has been reset to default.', m)
    }
  } else {
    itsu.menu = typeof itsu.menu == 'object' ? itsu.menu : {}
    if (text) {
      itsu.menu[type] = text
      itsu.reply(m.chat, `✅ Menu *${type}* has been updated.\n` + info, m)
    } else {
      delete itsu.menu[type]
      itsu.reply(m.chat, `🔄 Menu *${type}* has been reset to default.`, m)
    }
  }
}

handler.help = ['', 'before', 'header', 'body', 'footer', 'after'].map(v => 'setmenu' + v + ' <text>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i

handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler

// 💡 MENU PLACEHOLDER INFO
let info = `
📚 *Menu Placeholders:*

🌐 Universal:
%name — User name
%limit — Remaining limit
%exp — Current exp
%uptime — Bot uptime
%date — Today's date
%time — Current time
%prefix — Command prefix
%totalreg — Total registered users
%week — Day of week
%category — Menu category
%cmd — Command name
%islimit — If command has limit

📌 Example Commands You Can Use:
#setmenuheader ╭───『 QUIET-SBOX-MD 』───╮
#setmenubody │ %cmd
#setmenufooter ╰──────[ By QUIET ]──────╯
`.trim()
