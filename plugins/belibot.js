let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :      *Rp 5.000*
╠➥ *PERMANENT :      *Rp 10.000*
╠➥ *Trial* :   *Rp 0*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Topup/Pin
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klil Button Di Bawah
║
╠═〘 Fahzz 〙 ═`.trim(), 'Fahzz', 'Dana', '#viadana', 'Gopay', '#viagopay', m)
}

handler.command = /^sewabot$/i

module.exports = handler
