const fs = require('fs')

global.namabot = "Store-Botz MD" // UBAH JADI NAMA LU
global.namaowner = "NATHAN" // NAMA OWNER
global.footer_text = "© Store-Botz MD" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6287870356915'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER HARGA 30K") // ISI HARGA SEWA BOT LU
global.script = ("https://youtube.com/@NATHAN_OFFICIAL_27 NO ENC ? BUY") // BEBAS ASAL JAN HAPUS
global.fakelink = "https://chat.whatsapp.com/KTXtrESxZCg8aTUbP62c6d" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GC NYA*\n\nhttps://chat.whatsapp.com/KTXtrESxZCg8aTUbP62c6d`) // GANTI LINK GRUB BOT LU \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = true // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoread = false // BEBAS
global.packname = '© NATHAN OFFICIAL 27' //sticker wm ubah
global.author = 'Di Buat Oleh NATHAN OFFICIAL 27' //sticker wm ganti nama kalian

/*
SUBS TOD
YT GUA
NATHAN OFFICIAL 27 
*/

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})