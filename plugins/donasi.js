let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*Gopay*_✅ : 
║│- 6282145203493
║│
║│➸ _*Dana*_✅: 
║│- 6282145203493
║│
║│➸ _*Pulsa*_✅: 
║│- 6282145203493
║│
║│➸ _*OWNER*_
║│- wa.me/6282145203493
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
