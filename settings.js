//Ubah Image/Thumbnail di folder maslent/pplent/maslent.png (Cari fotomu Ubah namnya ganti jadi maslent.png trus di gantu make pp mu yang baru
const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
///Gantien dewe sak karepmu..,
global.pulsa = "6281328860289"
global.gopay = "6283865758749"
global.dana = "6281328860289"
global.packname = 'Lenttobs'
global.footer = '©Sopengg'
global.ovo = "6281328860289"
global.ownerlen = "Sofa Najamaula/Sopengg"//Ubah
global.owner = ['6281328860289'] //ubh nomor owner hp
global.ownername = "Sopengg" //ubah
global.ytname = "YT: Naja Sofa"//ubah
global.socialm = "IG: sfanjmla"//ubah
global.location = "Jl. Jati Gondoharum, Gandulekor, Gondoharum, Kec. Pagerruyung, Kabupaten Kendal, Jawa Tengah 51361, Indonesia"//ubah
global.ownernomer = "6281328860289"//ubah nomorhp owner
global.premium = ['6281328860289']//ubah nomor hp premium
global.botname = 'SopengMdV1' //ubah
global.linkz = "https://chat.whatsapp.com/F3d1fzg0HqLKrlCADsc4UP"//ubah
global.websitex = "https://youtube.com/@najasofa4447"//ubah
global.botscript = 'https://github.com/Sofamaula8/BOT-TERBARU.git'
global.themeemoji = "😿"//ubah
global.packname = "Sticker By"//ubah
global.author = "Made by"//ubah
global.wm = "Lenttobs"//ubah
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Piye?!', //isien dewe Gantien bahasane Muales pol aku sak karepmu 
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Nya Harus Admin Dulu!',
    premime: 'Untuk Mendapatkan Fitur Premium Anda Harus Registrasi Dulu!',
    owner: 'Fitur Ini Hanya Bisa Di Gunakan Oleh Owner Bot Saja Ya :)',
    group: 'Fitur Ini Hanya Bisa Digunakan Di Grup!',
    private: 'Fitur Ini Hanya bisa Dilakukan Di Private Chat Ya!',
    bot: 'Fitur Ini Haya Bisa Digunakan Oleh Bot Saja Ya!',
    wait: 'Sedang process...',
    linkm: 'Mana link Nya?',
    endLimit: 'Yah Limitmu Sudah Habis, Limit Akan di Reset Setiap 12 Jam, Atau Beli Premium/Limit Di Owner',
    nsfw: 'Fitur Bokep Belum Diaktifkan, Silahkan Hubungi Admin Dulu',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")
    global.limitawal = {
    premium: "Infinity",
    free: 12, // limit awall 
    monayawal: 1000
}
global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
