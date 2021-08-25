/*
]=====> あＭｅＩｋｙツ <=====[ 
]=====> KASIH KREDIT GW IKY AJG<=====[
]=====> GANTI GANTI AJA GW BOLEHIN <=====[
FREE RECODE SAYANGKU
JNG LUPA SUBREK あＭｅＩｋｙツ
Dan semua creator bot wa tanpa kecuali
MHANK BAR BAR
DLL 
TQ TQ BANYAK BANYAK

//NOTE IKY CUMA RECODE SC BY MHANK BAR BAR

*/
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { virtex } = require('./src/virtex')
const { virtex2 } = require('./src/virtex2')
const { animesaran } = require('./src/animesaran')
const { asupan } = require('./src/asupan')
const { animesaran2 } = require('./src/animesaran2')
const { cara } = require('./src/cara')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const { kodenuklir } = require('./src/kodenuklir')
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const { spawn, exec, execSync } = require("child_process")
const speed = require('performance-now')


publik = false
cr = 'Iky Ads'
prefix = '.'
fake = '*Iky Ads✅*'
numbernye = '0'
targetprivate = '62895414817057'
ghoibsu = 'tes'
myteks = 'okeh nyala'
blocked = []
const vcard = 'BEGIN:VCARD\n' 
// KASIH WM GUE
            + 'VERSION:3.0\n' 
// あＭｅＩｋｙツ
            + 'FN:あＭｅＩｋｙツ\n' 
// JAN NGEYEL AJG
            + 'ORG:あＭｅＩｋｙツ;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6283141727903:+62  831-4172-7903\n' 
            + 'END:VCARD' 
prefix = '.'
blocked = []   
limitawal = 9999999
memberlimit = 1

/*
]=====> SETTING DI SINI KEBAWAH BIARIN AJG <=====[
*/
const ownerNumber = ["6283141727903@s.whatsapp.net","6283141727903@s.whatsapp.net"]
const botName = 'あＭｅＩｋｙツ'
const ownerName = 'あＭｅＩｋｙツ'
const BarBarKey = 'tempel sini' // APIKEY BELI DI IKY
const VhtearKey = '1BlnApiIkyPake' // beli di 083141727903
const XteamKey = 'AbilGanss' // APIKEY XTEAM BELI SENDIRI:V
const TobzKey = 'Bidmzz1sJ2L1TKyqaMEU' // PUNYA NASWARI TEAM
const ApiDevolover = 'PunyaIkyAds'
const TechApi = '5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ'
const zeksapi = 'apivinz'
const shizukaapi = 'itsmeiky633'
const apivhtear = 'niehbelidiikyads' // YANG DI YOUTUBE
const lolhuman = '9b07654c0e005b08a6ec5473'
/*
]=====> SC BY あＭｅＩｋｙツ <=====[
*/
//SUBREK JUGA IKY ADS:V
//WA GW 083141727903
/*       
]=====> LOAD JSON <=====[
*/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
/*       
]=====> LOAD MENU <=====[
*/
const { help } = require('./help/help')
const { iklan } = require('./lib/iklan')
const { rules } = require('./lib/rules')
const { tnc } = require('./lib/tnc')
const { simple } = require('./database/menu/simple')
const { gabut } = require('./database/menu/gabut')
const { groupm } = require('./database/menu/group')
const { download } = require('./database/menu/download')
const { dompet } = require('./database/menu/dompet')

const { random } = require('./database/menu/random')
const { other } = require('./database/menu/other')
const { owb } = require('./database/menu/owb')
const { maker } = require('./database/menu/maker')
const { sound } = require('./database/menu/sound')
/*
]=====> FUNCTION <=====[
*/
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jamnya ${pad(minutes)} Menitnya ${pad(seconds)} Detiknya`
}
//------END------\\
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*
]=====> SCAN QR <=====[
*/

const ikyy = new WAConnection()
	ikyy.logger.level = 'warn'
	console.log(banner.string)
	ikyy.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' POWERED BY あＭｅＩｋｙツ ID'))
	})
	ikyy.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(ikyy.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./session.json') && ikyy.loadAuthInfo('./session.json')
	ikyy.on('connecting', () => {
		start('2', 'IKY Connecting...')
	})
	ikyy.on('open', () => {
		success('2', 'IKY Connected')
	})
	ikyy.connect({timeoutMs: 30*1000})

ikyy.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await ikyy.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await ikyy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `[ *WELCOME IN GC ${mdata.subject}* ] \n___________________________\n@${num.split('@')[0]} Intro/Dikick!!! \n➸ Nama : \n➸ Umur : \n➸ Askot : \n➸ Gender : \n➸ Udah Punya Doi/Blm: \n➸ Pap Muka dumlu!!! \n➸ Instagram? \n𝐒𝐚𝐯𝐞 𝐍𝐨𝐦𝐨𝐫 𝐀𝐃𝐌𝐈𝐍! \n *___________________________*\nJangan jadi kutu lomcat sayang!!`
				let buff = await getBuffer(ppimg)
				ikyy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await ikyy.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `bay sayonara.. @${num.split('@')[0]}👋* \n_jan balik lagi ya:v_`
				let buff = await getBuffer(ppimg)
				ikyy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	ikyy.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

ikyy.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
		const mdata = await ikyy.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			try {
				ppimg = await ikyy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = `Hallo @${num.split('@')[0]}\n Welcome to group ${mdata.subject} Jangan lupa intro kau!...Betah-betah yah di sini🖤`
			let buff = await getBuffer(ppimg)
			ikyy.sendMessage(mdata.id, teks, MessageType.text)
		} else if (anu.action == 'remove') {
			num = anu.participants[0]
			try {
				ppimg = await ikyy.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = `Sayonara🥳 @${num.split('@')[0]} Al-fatihah buat yang left/terkick!.`
			let buff = await getBuffer(ppimg)
			ikyy.sendMessage(mdata.id, teks, MessageType.text)
		}
	} catch (e) {
		console.log('Error : %s', color(e, 'red'))
	}
})

//
ikyy.on('CB:Blocklist', json => {
	if (blocked.length > 2) return
	for (let i of json[1].blocklist) {
		blocked.push(i.replace('c.us', 's.whatsapp.net'))
	}
})
ikyy.on('message-update', async (hurtz) => {
	try {
		
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = hurtz.key.fromMe ? ikyy.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = hurtz.key.remoteJid
			const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = hurtz.key.id
			const conts = hurtz.key.fromMe ? ikyy.user.jid : ikyy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = hurtz.key.fromMe ? ikyy.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Text
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* *${body ? body : '-'}*`
				ikyy.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await ikyy.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* *Sticker*
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const buff = fs.readFileSync(savedFilename)
				ikyy.sendMessage(from, strConversation, MessageType.text, opt4tag)
				ikyy.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await ikyy.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Image
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* ${body ? body : '-'}\`\`\``
				ikyy.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

ikyy.on('message-new', async (mek) => {
		try {
			if (!publik) {
			if (!mek.key.fromMe && mek.key.fromMe) return
		}
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}

	
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isCmd = body.startsWith(prefix)
			const args = body.trim().split(/ +/).slice(1)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = ikyy.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = ikyy.contacts[sender] != undefined ? ikyy.contacts[sender].vname || ikyy.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await ikyy.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
           
       
            const insom = from.endsWith('@g.us')
            const nameReq = insom ? mek.participant : mek.key.remoteJid
            pushname2 = ikyy.contacts[nameReq] != undefined ? ikyy.contacts[nameReq].vname || ikyy.contacts[nameReq].notify : undefined
     /*
]=====> あＭｅＩｋｙツ <=====[
*/

			
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBanned = ban.includes(sender)
            const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				ikyy.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				ikyy.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? ikyy.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : ikyy.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    ikyy.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			ikyy.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    ikyy.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		
		
/*
]=====> LEVELING <=====[
*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
/*
]=====> CHECK LIMIT BY LANN ID <=====[
*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return ikyy.sendMessage(from,`Limit anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan naik level_`, text,{quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }})
                            ikyy.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        ikyy.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
/*
]=====> LIMITED BY LANN ID <=====[
*/
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    ikyy.sendMessage(from, ind.limitend(pushname), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            ikyy.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
      
/*
]=====> ATM <=====[
*/



///EVAL

			
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))


switch(command) {
	      case 'help':
		if (!isRegistered) return reply(ind.noregis())
                    var punya_wa = "0@s.whatsapp.net"
                    var ini_text = (cr)
                    var ini_buffer = await getBuffer("https://i.ibb.co/dt8rkyR/IMG-20210331-WA0000.jpg")
		    const pepolu = JSON.parse(fs.readFileSync('./database/bot/totalcmd.json'))[0].totalcmd
		    uptime = process.uptime()
		    myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
                var tgl = new Date();
                var day = tgl.getDate()
                  bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
                    const ini_csreply = {
                        contextInfo: {
                            stanzaId: 'B826873620DD5947E683E3ABE663F263',
                            participant: punya_wa,
                            remoteJid: 'status@broadcast',
                            quotedMessage: {
                                imageMessage: {
                                    caption: ini_text,
                                    jpegThumbnail: ini_buffer
                                }
                            }
                        }
                    }
                    ikyy.sendMessage(from, help(prefix, pushname2, uptime, tanggal, pepolu), text, ini_csreply)
                    break
break
                case 'return':
				return ikyy.sendMessage(from, JSON.stringify(eval(args.join(''))), text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'donasi':
				case 'donate':
					ikyy.sendMessage(from, donasi(pushname, prefix, botName, ownerName), text)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'iklan':
					ikyy.sendMessage(from, iklan(pushname, prefix, botName, ownerName), text)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'rules':
					ikyy.sendMessage(from, rules(pushname, prefix, botName, ownerName), text)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				
					case 'tnc':
					ikyy.sendMessage(from, tnc(pushname, prefix, botName, ownerName), text)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'bingungcok':
					ikyy.sendMessage(from, cara(pushname, prefix, botName, ownerName), text)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break				
				
       					
//SIMPEL MENU

const util = require('util')

case '?':
case '>':
case '$':
var ikyyyy = args.join(' ')
reply(util.format(eval(`;(async () => { ${ikyyyy} })()`)))
console.log(ikyyyy)
break
//////EVAL
            case 'stickergif':
case 'sticker':
					case 'stiker':
					case 's':
					 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'pJ6xKSMPCT8QMcvBzGFY'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								ikyy.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'nobg':
                                     
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         owgi = await ikyy.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranpp = getRandom('.png')
                                        ranop = getRandom('.webp')
                                        anu1 = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=Aris komtol`, {method: 'get'})
                                         exec(`wget ${anu1.result.image} -O ${ranpp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranop}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(ranop)
                                                ikyy.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(ranop)
})
                                          } else {
                                                 reply('Gunakan foto!')
                                          }
                                        ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
   case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${lolhuman}&text=${ini_txt}`)
                    ikyy.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                    break
                    case 'attp':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} MrA43G`)
                    teks = args.join(" ")
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/attp?apikey=SoftApikey${lolhuman}&text=${teks}`)
                    ikyy.sendMessage(from, buffer, sticker, { quoted: mek})
                    break
                    
                    //MAKER MENU
                    
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolhuman}&text=${ini_txt}`)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
		if (!isRegistered) return reply(ind.noregis())
		
                cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolhuman}&text1=${txt1}&text2=${txt2}`)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                    case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhuman}&text=${ini_txt}`)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                       case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolhuman}&text=${ini_txt}`)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
		if (!isRegistered) return reply(ind.noregis())
		
                cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolhuman}&text1=${txt1}&text2=${txt2}`)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                    case 'battlefield': //IKY GANS
				if (args.length < 1) return reply(`textnya mana om?`)					
				ct = body.slice(12)
				ll1 = ct.split("|")[0];
				ll2 = ct.split("|")[1];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case '8bit': //IKY GANS				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(5)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev13?text=${ll1}&text2=${ll2}&theme=8bit&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'googlesearch': //IKY GANS				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(14)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'randomwp': //IKY GANS
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/wallpaper?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'ini fotonya kak'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'blackpink': //IKY GANS
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomimage/blackpink?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.result)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'ini fotonya kak'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'hentaipict': //IKY GANS
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hentai?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.result)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'ini fotonya kak'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
	
		case 'gabut': //IKY GANS
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/gabut?apikey=${ApiDevolover}`)
				hasil = `➸ *Activity* : ${anu.result.activity}\n*➸ Type :* ${anu.result.type}`
				ikyy.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
case 'burnpaper': //IKY GANS				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev4?text=${ct}&theme=burnpaper&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'textonecup': //IKY GANS				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${ct}&theme=textonecup&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'textsky': //IKY GANS				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${ct}&theme=textsky&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'nature': //IKY GANS				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=nature&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'rosegold': //IKY GANS				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=rosegold&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'nature3d': //IKY GANS				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev1?text=${ct}&theme=nature3d&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

                    break
		case 'underglass': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev5?text=${ct}&theme=underglass&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'cemetery': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev5?text=${ct}&theme=cemetery&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'royallock': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev6?text=${ct}&theme=royallock&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'coffecup': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'coffecup2': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup2&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'neon': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(5)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/metallic?text=${ct}&theme=neon&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'glow': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(5)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=glow&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'summer': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(7)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/alam?text=${ct}&theme=summer&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'flower': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(6)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/alam?text=${ct}&theme=flower&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'grandient': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(10)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro6?text=${ct}&theme=grandient&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'embroidery': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(11)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro7?text=${ct}&theme=embroidery&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'funnycup': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(9)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro4?text=${ct}&theme=funnycup&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'orchids': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(11)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro5?text=${ct}&theme=orchids-flower&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'smoke2': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(7)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro5?text=${ct}&theme=smoke2&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'loveone': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(8)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=loveone&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'smoke': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(6)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=smoke&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'onesilk': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(8)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=onesilk&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'glowing': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(8)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro1?text=${ct}&theme=glowing&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'heart': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(6)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro?text=${ct}&theme=heart&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'wolf': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(5)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro?text=${ct}&theme=wolf-metal&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'candy': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(6)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro7?text=${ct}&theme=candy&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'ffbaner':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname2))
                var gh = body.slice(12)
                var porn = gh.split("&")[0];
                var hub = gh.split("&")[1];
                if (args.length < 1) return reply('Teksnya mana um')
                love = body.slice(10)
                if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
                reply(ind.wait())
                bufferxcz = await getBuffer(`https://api.vhtear.com/bannerff?title=${love}&text=${porn}&apikey=${VhtearKey}`, { method: 'get' })
                ikyy.sendMessage(from, bufferxcz, image, { quoted: mek, caption: ' ' + love })
                break
case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolhuman}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
					case 'wanted':
	if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await ikyy.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	ikyy.sendMessage(from, hehe, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Neh...", 'jpegThumbnail': fs.readFileSync('./image/odc.jpeg')}}}})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	case 'fftourserti':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(12)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'fftourserti2':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'fftourserti3':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'fftourserti4':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'fftourserti5':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'pubgtourserti':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(14)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'pubgtourserti2':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(15)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'pubgtourserti3':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(15)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'pubgtourserti4':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(15)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'pubgtourserti5':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(15)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'mltourserti':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(12)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti1/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'mltourserti2':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'mltourserti3':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'mltourserti4':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
            case 'mltourserti5':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
                if (args.length < 1) return reply(`textnya mana om?`)
                ct = body.slice(13)
                reply(`Loading`)
                buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
                ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: '*Nih kak.. jangan lupa sewa botku*' })
                break
	case 'vinta':
			 
			 
			if (args.length < 1) return reply(ind.wrongf())
					vin = body.slice(7)
					 reply(`[❕] Loading`)
					vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
					ikyy.sendMessage(from, vintage, image, {caption: 'nih anjim ${vin}', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

                 
break 
					case 'summer':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					 reply(`[❕] Loading`)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					ikyy.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'sandwrite':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					 reply(`[❕] Loading`)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					ikyy.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break 
					case 'metaldark':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					 reply(`[❕] Loading`)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					ikyy.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break 
					case 'dropwater':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					 reply(`[❕] Loading`)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					ikyy.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break 
					case 'grenneon':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					 reply(`[❕] Loading`)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
					ikyy.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break 
					case 'neontext':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					 reply(`[❕] Loading`)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					ikyy.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, aruga, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break 
					case 'toxic':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					 reply(`[❕] Loading`)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
					ikyy.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'sumery':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					 reply(`[❕] Loading`)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
					ikyy.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'blood':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					 reply(`[❕] Loading`)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
					ikyy.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'firework':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					arugazzz = body.slice(10)
					 reply(`[❕] Loading`)
					arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
					ikyy.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'lava':
					 
					 
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
					 reply(`[❕] Loading`)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
					ikyy.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'pornhub':
				 
				 
				 
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply('「❗」Contoh : ${prefix}pornhub IKY & Hub')
				 reply(`[❕] Loading`)
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${porn}&text2=${hub}&apikey=${VhtearKey}`)
				ikyy.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break

                case 'gemboktext':
				 
				 
				 
					var gh = body.slice(12)
					var gem = gh.split("&")[0];
					var bok = gh.split("&")[1];
					if (args.length < 1) return reply('[❗] Contoh : ${prefix}gemboktext 11 01 2021 & IKY dan Nadia')
					 reply(`[❕] Loading`)
					buffer = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
					ikyy.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                case 'glitchtext':
                case 'gctext':
				 
				 
				 
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply('[❗] Contoh : ${prefix}glitchtext IKY & Gans')
					 reply(`[❕] Loading`)
					buffer = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${gli}&text2=${tch}%20&apikey=${VhtearKey}`)
					ikyy.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'bikinquote':
                 
                 
                 
                var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `yang mau dijadiin quote apaan, titit?\n\ncontoh : ${prefix}bikinquote aku bukan boneka & Kata IKY`
					if (args.length < 1) return reply(pref)
					 reply(`[❕] Loading`)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					ikyy.sendMessage(from, buffer, image, {caption: 'Nih kak >_<', quoted: mek})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

//////////DOWNLOAD MENU
case 'ytplay':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    ikyy.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek})
                    break
                case 'ytplay2':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    ikyy.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek})
                    get_video = await getBuffer(get_result.video)
                    ikyy.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek})
                    break
		    case 'ytmp33':
			if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/ytaudio2?apikey=KatoNiBoss&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    buffer = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
		    get_audio = await getBuffer(get_result.link[0].size)
		    ikyy.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'ytsearch':
			if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ytmp3':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${lolhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    ikyy.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek})
                    break
                case 'ytmp32':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${lolhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    ikyy.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek})
                    break
                case 'ytmp4':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    ikyy.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek})
                    break
                case 'ytmp42':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${lolhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    ikyy.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek})
                    break
                    case 'tiktoknowm':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${lolhuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    ikyy.sendMessage(from, ini_buffer, video, { quoted: mek})
                    break
                case 'tiktokmusic':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolhuman}&url=${ini_link}`)
                    ikyy.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek})
                    break
                case 'spotify':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolhuman}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    ikyy.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek})
                    break
                case 'spotifysearch':
			if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    ikyy.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek})
                    break
                case 'igdl':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    ikyy.sendMessage(from, ini_buffer, ini_type, { quoted: mek})
                    break
                case 'fbdl':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    ikyy.sendMessage(from, ini_buffer, video, { quoted: mek})
                    break
                case 'zippyshare':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhuman}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'pinterestdl':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'pixiv':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${lolhuman}&query=${query}`)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'pixivdl':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolhuman}`)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'xhamstersearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lolhuman}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'xnxxsearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${lolhuman}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
case 'instastory':
					try {
                    if (args.length < 1) return reply('Usernamenya mana kak?')
				    query = body.slice(12)
				    reply('[❕] Loading')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/igstory/${query}?apikey=Oz-san`)
					buffer = await getBuffer(anu.result[0].url)
					ikyy.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek })
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error gan')
					}
					break
                    case 'twitter':
                    if (args.length < 1) return reply('Urlnya mana gan?')
                    if (!isUrl(args[0]) && !args[0].includes('www.twitter.com')) return reply(mess.error.Iv)
                    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/twitter?apikey=Oz-san&url=${args[0]}`)
                    reply('[❕] Loading')
                    data = anu.result[0].link
                    buffer = await getBuffer(data)
                    ikyy.sendMessage(from, buffer, video, { quoted: mek })
                    break
case 'cocofun':
				try {
					reply('[❕] Loading')
				if (args.length < 1) return reply('Urlnya mana um?')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cocofun?apikey=Oz-san&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.result.title}\n*Tag* : ${anu.result.tag}\n*Likes* : ${anu.result.likes}\n*Dislike* : ${anu.result.dislike}\n*Views* : ${anu.result.views}\n*Uploader* : ${anu.result.uploader}\n*Duration* : ${anu.result.duration}`
					thumb = await getBuffer(anu.result.thumbnail)
					ikyy.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.nowm)
					ikyy.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error gan')
					}
					break
					
					
					
					////ANIME MENU
					case 'character':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'manga':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'anime':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wait':
		if (!isRegistered) return reply(ind.noregis())
		
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        const filePath = await ikyy.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${lolhuman}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        ikyy.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'kusonime':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${lolhuman}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'kusonimesearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'otakudesu':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${lolhuman}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'nhentai':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    ikyy.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=${lolhuman}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'nekopoisearch':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'hentai': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hentaigif?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'waifu': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/waifu?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'eroyuri': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'hug': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'hug2': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'awoo': // masih ngebug
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/awoo?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'lick': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/lick?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'kiss': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/kiss?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'smug': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/smug?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'cuddle': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/cuddle?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'bully': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/bully?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'shinobu': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/shinobu?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'megumin': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/megumin?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'blush': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/blush?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'highfive': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/highfive?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'handhold': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/handhold?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'smile': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/smile?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'glomp': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/glomp?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'cringe': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/cringe?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})



//ISLAMI MENU
case 'niatsholat': // Case By Arga
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=${ApiDevolover}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'bacaansholat': // Case By Arga
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/bacaanshalat?apikey=${ApiDevolover}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})


case 'listsurah':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolhuman}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolhuman}`)
                    ikyy.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
		if (!isRegistered) return reply(ind.noregis())
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
case 'tahlil': // Update NEW FITUR
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/tahlil?apikey=${ApiDevolover}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'ayatkursi': // Update NEW FITUR
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/ayatkursi?apikey=${ApiDevolover}`)
				teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
				ikyy.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
    

  /////RANDOM TEXT///////
case 'quotes':
		if (!isRegistered) return reply(ind.noregis())
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${lolhuman}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    break
                case 'quotesanime':
		if (!isRegistered) return reply(ind.noregis())
		
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolhuman}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
		if (!isRegistered) return reply(ind.noregis())
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolhuman}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
		if (!isRegistered) return reply(ind.noregis())
		buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/quotesimage?apikey=KatoNiBoss`)
		ikyy.sendMessage(from, buffer, image, { quoted: mek})
		break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
		if (!isRegistered) return reply(ind.noregis())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhuman}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
		if (!isRegistered) return reply(ind.noregis())
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolhuman}`)
                    reply(anu.result)
                    break
//GABUT MENU
case 'bisakah':
				 
				 
				 
					bisakah = body.slice(1)
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky','Gak Bisa Ajg Aowkwowk','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					ikyy.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'kapankah':
				 
				 
				 
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					ikyy.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
           case 'apakah':
            
            
            
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					ikyy.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'rate':
				 
				 
				 
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					ikyy.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
           case 'hobby':
            
            
            
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					ikyy.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
           case 'seberapagay':
            
            
            
					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                case 'nangis':
                 
				 
				 
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('SABAR NGAB')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						ikyy.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'cium':
					 
				 
				 
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
					reply('Mwahhh')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						ikyy.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'peluk':
					 
				 
				 
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, {method: 'get'})
					reply('Peyukkkk')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						ikyy.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break	
                case 'truth':
                 
                 
				 
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					ikyy.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                case 'dare':
                 
				 
				                
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u IKY?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					ikyy.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                  case 'timer':
                   
				 
				                  
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				ikyy.sendMessage(from, `${menunye}`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break	

           


case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${lolhuman}`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result.flag}`
					setTimeout( () => {
					ikyy.sendMessage(from, '*➸ Jawaban :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, tebakbender, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
                case 'tebakgambar':
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolhuman}`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					ikyy.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break  
				case 'family100':
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolhuman}`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					ikyy.sendMessage(from, '*➸ Jawaban :* '+anu.result.aswer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, family, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'caklontong':
					if (!isRegistered) return reply(ind.noregis())
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${lolhuman}`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					ikyy.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					ikyy.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
					case 'fitnah':
                 
				 
				 				
					if (!isGroup) return reply(ind.groupo())              
					
                 
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag&pesan&balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					ikyy.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					
					
					
					
                ///////STALKING
                case 'igstalk':
					if (!isRegistered) return reply(ind.noregis())
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : https://www.instagram.com/${get_result.username}\n`
					txt += `Full : ${get_result.fullname}\n`
					txt += `Post : ${get_result.posts}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.photo_profile)
					ikyy.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
					case 'twtstalk':
				if (!isRegistered) return reply(ind.noregis())
				username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/twitter/${username}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Nama : ${get_result.name}\n`
					txt += `Name Screen : ${get_result.screen_name}\n`
					txt += `Bio : ${get_result.description}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following: ${get_result.following}\n`
					txt += `Like : ${get_result.like}\n`
					txt += `Tweet : ${get_result.tweet}\n`
					txt += `Join : ${get_result.joined}\n`
					profile = await getBuffer(get_result.profile_picture)
					banner = await getBuffer(get_result.banner)
					ikyy.sendMessage(from, profile, image, {quoted: mek, caption: txt})
					ikyy.sendMessage(from, banner, image, {quoted: mek, caption: 'BANNERNYA OM!' })
					break
		case 'githubstalk':
					if (!isRegistered) return reply(ind.noregis())
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					ikyy.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
		case 'tkstalk':
			if (!isRegistered) return reply(ind.noregis())
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolhuman}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					ikyy.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
		case 'ytstalk':
					if (!isRegistered) return reply(ind.noregis())
					ytk = `${body.slice(11)}`
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=RiuApikey&query=${ytk}`, {method: 'get'})
					cari = '•••••••••••••••••\n'
					for (let search of anu.result) {
						cari += `*Chanel* : ${search.channel_name}\n*Tentang* : ${search.channel_about}\n*Created* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
					}
					reply(cari.trim())
					break
					
					
					
					///// RANDOM IMAGE
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
		if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhuman}`)
                    ikyy.sendMessage(from, buffer, image, { quoted: mek})
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		if (!isRegistered) return reply(ind.noregis())
		
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhuman}`)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
		if (!isRegistered) return reply(ind.noregis())
		
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhuman}`)
                    ikyy.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
		if (!isRegistered) return reply(ind.noregis())
		
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhuman}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        ikyy.sendMessage(from, buff, sticker, { quoted: mek})
                        fs.unlinkSync(rano)
                    })
                    break
                    //TAMBAHAN
case 'asupan':
			if (!isRegistered) return reply(ind.noregis())
			
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolhuman}`)
                    buffer = await getBuffer(get_result.result)
                    ikyy.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
					case 'meme': 
				if (!isRegistered) return reply(ind.noregis())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${lolhuman}`, {method: 'get'})
				ikyy.sendMessage(from, buffer, image, {quoted: mek})
				break
				case 'memeindo': 
				if (!isRegistered) return reply(ind.noregis())
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolhuman}`, {method: 'get'})
				ikyy.sendMessage(from, buffer, image, {quoted: mek})
				break
				case 'darkjoke': 
				if (!isRegistered) return reply(ind.noregis())
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=KatoNiBoss`, {method: 'get'})
				ikyy.sendMessage(from, buffer, image, {quoted: mek, caption: 'FIX BUG BY IKY'})
				break
				case 'namaninja': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Riu Ganteng`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=${lolhuman}&nama=${gatauda}`)
					reply(anu.result)
					break
					case 'alay': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Riu Ganteng`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/alay?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'purba':
					case 'bpurba': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Riu Ganteng`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/bahasapurba?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'BK':
					case 'bk':
					case 'besarkecil': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Sofyan AMV`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/upperlower?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'hilih': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Riu Ganteng`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/hilih?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					break
					//GRUP MENU
					case 'welcome':
                   				
					if (!isGroup) return reply(ind.groupo())
					
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*FITUR WELCOME SUDAH AKTIF KAK*')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*⟪ SUKSES ⟫ MENGAKTIFKAN FITUR WELCOME/LEAVE DI GROUP*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*⟪ SUKSES ⟫ MEMATIKAN FITUR WELCOME/LEAVE DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                 case 'event':
                                    
					if (!isGroup) return reply(ind.groupo())
					
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF KAK*')
						event.push(from)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*⟪ SUKSES ⟫ MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*⟪ SUKSES ⟫ MEMATIKAN EVENT DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                
                if (args.length < 1) return reply('Ekhemm >_<')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'simih':
                   				
					if (!isGroup) return reply(ind.groupo())
					
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*SUDAH AKTIF*')
						samih.push(from)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*⟪ SUKSES ⟫ MENGAKTIFKAN FITUR SIMI DI GROUP*')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*⟪ SUKSES ⟫ MEMATIKAN FITUR SIMI DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'nsfw':
                   				
					if (!isGroup) return reply(ind.groupo())
					
					if (args.length < 1) return reply('Ekhem >_<')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*⟪ SUKSES ⟫ MENGAKTIFKAN FITUR NSFW DI GROUP*')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*⟪ SUKSES ⟫ MEMATIKAN FITUR NSWF DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					
				case 'admin':
                   
				 
				 				
					if (!isGroup) return reply(ind.groupo())
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'grup':
					case 'group':
                   					
					if (!isGroup) return reply(ind.groupo())
					
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						ikyy.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						ikyy.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'add':
                   
				 
				 				
					if (!isGroup) return reply(ind.groupo())
					
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add bapakau kah? -_-')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						ikyy.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
			     	case 'kick':
                   
				 
				 			     	
					if (!isGroup) return reply(ind.groupo())
					
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						ikyy.groupRemove(from, mentioned)
					} else {
						mentions(`Bismillah atas izin admin grup kamu akan saya tendang @${mentioned[0].split('@')[0]} ??`, mentioned, true)
						ikyy.groupRemove(from, mentioned)
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break

					ikyy.sendMessage(from, options, text)
					await limitAdd(sender)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'antilinkgrup':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                if (Number(args[0]) === 1) {
                    if (isAntiLink) return reply('*FITUR ANTILINK SUDAH AKTIF KAK')
                    antilink.push(from)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
                    reply('*âŸª SUKSES âŸ« MENGAKTIFKAN FITUR ANTILINK DI GROUP*')
                    ikyy.sendMessage(from, `ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
                } else if (Number(args[0]) === 0) {
                    if (!isAntiLink) return reply('EMANG AKTIF?')
                    var ini = anti.botLangsexOf(from)
                    antilink.splice(ini, 1)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
                    reply('*âŸª SUKSES âŸ« MEMATIKAN FITUR ANTILINK DI GROUP*')
                } else {
                    reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                }
                break
break
					case 'antivirtek':
					if (!isGroup) return reply(ind.groupo())
					
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('UDAH NYALA KAK')
						antilink.push(from)
						fs.writeFileSync('./database/group/antifirtext.json', JSON.stringify(antifirtex))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX DI GROUP')
						ikyy.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS KALO GAMAU DI KICK GRUP INI ANTI VIRUS`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antilink))
						reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})


					
			
break 
                case 'level':
                                   
                 
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ LEVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
               ikyy.sendMessage(from, resul, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                 case 'linkgrup':
                 case 'linkgc':
                 case 'linkgroup':
                   
				 
				                
				    if (!isGroup) return reply(ind.groupo())
				     
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await ikyy.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    ikyy.sendMessage(from, yeh, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
			        await limitAdd(sender)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'tagall':
                   
				 
				 		
					if (!isGroup) return reply(ind.groupo())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += ` @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
           case 'setname':
                            
                if (!isGroup) return reply(ind.groupo())
			    
				if (!isBotGroupAdmins) return reply(ind.badmin())
                ikyy.groupUpdateSubject(from, `${body.slice(9)}`)
                ikyy.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Nama Grup', text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                case 'setdesc':
                                 
                if (!isGroup) return reply(ind.groupo())
			    
				if (!isBotGroupAdmins) return reply(ind.badmin())
                ikyy.groupUpdateDescription(from, `${body.slice(9)}`)
                ikyy.sendMessage(from, '⟪ SUKSES ⟫ Mengubah Desk Grup', text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
           case 'demote':
                            
					if (!isGroup) return reply(ind.groupo())
					
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						ikyy.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						ikyy.groupDemoteAdmin(from, mentioned)
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break

//UPTIME
        case 'reset':
                    p.kill()
                    start.apply(this, arguments)
                    break
                case 'uptime':
                    p.send(process.uptime())
                    break
				case 'promote':
                 				
					if (!isGroup) return reply(ind.groupo())
					
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						ikyy.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						ikyy.groupMakeAdmin(from, mentioned)
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'delete':
		case 'del':
		case 'd':
			 
                         
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins)return reply(mess.only.admin)
			ikyy.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'hedsot':
                 				
					if (!isGroup) return reply(ind.groupo())
					
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						ikyy.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						ikyy.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						ikyy.groupRemove(from, mentioned)
						}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'hidetag5':
                 				
					if (!isGroup) return reply(ind.groupo())
					
					if (!isBotGroupAdmins) return reply(ind.badmin())
					var value = body.slice(9)
					var group = await ikyy.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					ikyy.sendMessage(from, options, text)
	                .then(() => {ikyy.sendMessage(from, options, text)})
	                .then(() => {ikyy.sendMessage(from, options, text)})
	                .then(() => {ikyy.sendMessage(from, options, text)})
	                .then(() => {ikyy.sendMessage(from, options, text)})
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
//LAINNYA
case 'tahta':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(ind.wait())
					bufferrty = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${teks}&apikey=FZVFZIBY`, {method: 'get'})
					ikyy.sendMessage(from, bufferrty, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
            case 'nobadword':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('1 untuk menyalakan, 0 untuk mematikan')
                if (args[0] === '1') {
                    if (isBadWord) return reply('*FITUR BADWORD SUDAH AKTIF KAK*')
                    badword.push(from)
                    fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                    reply(`*âŸª SUKSES âŸ« MENGAKTIFKAN FITUR BADWORD DI GROUP*`)
                } else if (args[0] === '0') {
                    badword.splice(from, 1)
                    fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                    reply(`F*âŸª SUKSES âŸ« MEMATIKAN FITUR BADWORD DI GROUP*`)
                } else {
                    reply(ind.satukos())
                }
                break

            case 'addbadword':
                if (!isOwner) return reply(ind.ownerb())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(`Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                const bw = body.slice(12)
                bad.push(bw)
                fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                reply('Success Menambahkan Bad Word!')
                break
            case 'delbadword':
                if (!isOwner) return reply(ind.ownerb())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(`Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                let dbw = body.slice(12)
                bad.splice(dbw)
                fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                reply('Success Menghapus BAD WORD!')
                break
            case 'listonline':
                if (!isOwner) return reply(ind.ownerb())
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(ikyy.chats.get(ido).presences), ikyy.user.jid]
                ikyy.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: mek,
                    contextInfo: { mentionedJid: online }
                })
                break

                    case 'imgurl':          
                    var imgbb = require('imgbb-uploader')
                    var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    var media = await  ikyy.downloadAndSaveMediaMessage(encmedia)       
                    imgbb('acf1ad5f22ad5822dc163cce74aedfd4', media)
                   .then(data => {
                    var caps = `*ã€Œ _IMAGE TO URL_ ã€*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     ikyy.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })

break
case 'setreplyimg':
				

					reply('[❕] Sedang di proses.........')

				const stk = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

				const downstk = await ikyy.downloadMediaMessage(stk)

				fs.unlinkSync('./image/odc.jpeg')

				fs.writeFileSync('./image/odc.jpeg', downstk)

				ikyy.sendMessage(from, `Sukses bosqu:v`, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "Berhasil Mengubah Sticker", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})

break
				case 'toptt':
	                 
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						ikyy.sendMessage(from, topt, audio, {mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, ptt:true})
						})
						await limitAdd(sender)
					    ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
         
				case 'tupai':
	                 
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} })
						fs.unlinkSync(ran)
					    })
				       ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'blub':
	                 
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} })
						fs.unlinkSync(ran)
					    })
				        ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'gemuk':
	                 
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} })
						fs.unlinkSync(ran)
					    })
				        ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'ghost':
	                 
					encmedia = JSON.parse(JSON.stringify(odc).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} })
						fs.unlinkSync(ran)
					    })
				       ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				 case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'instaimg':
				 
                 
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply('[❕] Sedang di proses.........')
				    ikyy.sendMessage(from, insta, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				    await limitAdd(sender) 
				    ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break  
				case 'instavid':
				 
                 
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply('[❕] Sedang di proses.........')
				    ikyy.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break  
				case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'stickerlist':
			case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				ikyy.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, contextInfo: { "mentionedJid": setiker } })
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
			case 'addsticker':
				
				svst = body.slice(12)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ikyy.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
				fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))
				ikyy.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				
				
			case 'addvn':
				

				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ikyy.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				ikyy.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvn':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				ikyy.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })
				break
			case 'getsticker':
			case 'gets':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				namastc = body.slice(12)
				result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
				ikyy.sendMessage(from, result, sticker)
				break
           case 'liststicker':
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				ikyy.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": setiker } })
				break
			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				ikyy.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ikyy.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				ikyy.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				await limitAdd(sender)
				break
			case 'getimage':
            case 'getimg':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				ikyy.sendMessage(from, buffer, image, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				ikyy.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": imagenye } })
				break
				
			case 'addvideo':
				if (!isQuotedVideo) return reply('Reply videonya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ikyy.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				ikyy.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'getvideo':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
				namastc = body.slice(10)
				buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
				ikyy.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
			case 'listvideo':
			case 'videolist':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				ikyy.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": videonye } })
				break
				   
				case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return ikyy.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return ikyy.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						ikyy.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						ikyy.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return ikyy.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						ikyy.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						ikyy.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return ikyy.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return ikyy.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					ikyy.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						ikyy.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						ikyy.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						ikyy.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						ikyy.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
			case 'kbbi':
				var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const kbbigan = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				var kbbi = body.slice(6)
				axios.get(`https://tobz-api.herokuapp.com/api/kbbi?kata=${kbbi}&apikey=BotWeA`).then((res) => {
					let hasil = `「 HASIL 」\n${res.data.result}`;
					ikyy.sendMessage(from, hasil, MessageType.text, kbbigan);
				})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'igpost': // Update NEW FITUR
				if (args.length < 1) return reply('Urlnya mana tong?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply('ini bukan url instagram anjim')
				ige = body.slice(8)
                                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/ig?url=${args[0]}&apikey=${ApiDevolover}`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
                                ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'fakeaddress': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/fakedata?country=en&apikey=${ApiDevolover}`)
				teks = `➸ *Nama* : ${anu.result.name}\n*➸ Birthday :* ${anu.result.birthday}\n*➸ Address :* ${anu.result.address}\n*➸ City :* ${anu.result.city}\n*➸ Region :* ${anu.result.region}\n*➸ Country :* ${anu.result.country}\n*➸ Zip Code :* ${anu.result.zip}\n*➸ Phone Number :* ${anu.result.phone_number}\n*➸ Username :* ${anu.result.username}\n*➸ Password :* ${anu.result.password}\n*➸ Email :* ${anu.result.email}`
				ikyy.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'battlefield': // Update NEW FITUR
				if (args.length < 1) return reply(`textnya mana om?`)					
				ct = body.slice(12)
				ll1 = ct.split("|")[0];
				ll2 = ct.split("|")[1];
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case '8bit': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(5)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev13?text=${ll1}&text2=${ll2}&theme=8bit&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'googlesearch': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(14)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'randomwp': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/wallpaper?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'ini fotonya kak'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'blackpink': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomimage/blackpink?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.result)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'ini fotonya kak'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'hentai': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hentai?apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.result)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'ini fotonya kak'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
	
		case 'gabut': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/gabut?apikey=${ApiDevolover}`)
				hasil = `➸ *Activity* : ${anu.result.activity}\n*➸ Type :* ${anu.result.type}`
				ikyy.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'quotemuslim': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomquote/muslim?apikey=${ApiDevolover}`)
				hasil = `*➸ Quote :* ${anu.result.text_id}`
				ikyy.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'infogempa': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/infogempa?apikey=${ApiDevolover}`)
				hasil = `➸ *Waktu* : ${anu.result.Waktu}\n*➸ Lintang :* ${anu.result.Lintang}\n*➸ Bujur :* ${anu.result.Bujur}\n*➸ Magnitudo :* ${anu.result.Magnitudo}\n*➸ Kedalaman :* ${anu.result.Kedalaman}\n*➸ Wilayah :* ${anu.result.Wilayah}`
				ikyy.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'translate': // Update NEW FITUR
				if (args.length < 1) return reply(`apa yang mau di translate in dari b.indo ke b.inggris?`)
				reply(`[❕] Sedang di proses.........`)
				ct = body.slice(10)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/translate?text=${ct}&to=en&apikey=${ApiDevolover}`)
				hasil = `➸ *Bahasa IND* : ${anu.hasil.data.origin}\n*➸ Bahasa ENG :* ${anu.hasil.data.result}`
				ikyy.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'faktaunik': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/faktaunik?apikey=${ApiDevolover}`, {method: 'get'})
				reply(anu.result.result)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'hilih': // Update NEW FITUR
				if (args.length < 1) return reply(`textnya mana om?`)
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hilih?kata=${body.slice(6)}&apikey=${ApiDevolover}`, {method: 'get'})
				reply(anu.result.result)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'gombal': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/katakatagombal?apikey=${ApiDevolover}`, {method: 'get'})
				reply(anu.result.quote)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'artinama': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/artinama?q=${body.slice(9)}&apikey=${ApiDevolover}`, {method: 'get'})
				reply(anu.result.result)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'lirik': // Update NEW FITUR
				if (args.length < 1) return reply(`nama lagunya mana om?`)
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/liriklagu?lagu=${body.slice(6)}&apikey=${ApiDevolover}`, {method: 'get'})
				reply(anu.result.results)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'chord': // Update NEW FITUR
				if (args.length < 1) return reply(`masukin nama lagunya om`)
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/chordlagu?lagu=${body.slice(7)}&apikey=${ApiDevolover}`, {method: 'get'})
				reply(anu.result.result)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'simisimi': // Update NEW FITUR
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/simisimi?text=${body.slice(9)}&apikey=${ApiDevolover}`)
				reply(anu.result.success)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'kodepos': // Update NEW FITUR	
				 
				 
				 
				if (args.length < 1) return reply(`kotanya mana bang?`)
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kodepos?kota=${body.slice(8)}&apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Provinsi:* : ${i.province}\n*City* : ${i.city}\n*Kecamatan* : ${i.subdistrict}\n*Kota* : ${i.urban}\n*Kode Pos* : ${i.postalcode}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'liputan6': // Update NEW FITUR	
				 
				 
				 
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/liputan6?apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Date* : ${i.isoDate}\n*Description* : ${i.description}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'cnnnews': // Update NEW FITUR	
				 
				 
				 
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/cnnnews?apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Content* : ${i.contentSnippet}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'republika': // Update NEW FITUR	
				 
				 
				 
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/republika?apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Creator:* : ${i.creator}\n*Title* : ${i.title}\n*Link* : ${i.link}\n*Categori* : ${i.categories}\n*Description* : ${i.description}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'temponews': // Update NEW FITUR	
				 
				 
				 
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/temponews?apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Content* : ${i.content}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'kumparannews': // Update NEW FITUR	
				 
				 
				 
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/kumpurannews?apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Creator:* : ${i.creator}\n*Title* : ${i.title}\n*Link* : ${i.link}\n*Categori* : ${i.categories}\n*Description* : ${i.description}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'lazymedia': // Update NEW FITUR	
				 
				 
				 
				if (args.length < 1) return reply(`mau nyari berita apaan bang?`)
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/lazymedia?search=${body.slice(10)}&apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Author:* : ${i.author}\n*Title* : ${i.title}\n*Tag* : ${i.tag}\n*Time* : ${i.time}\n*Description* : ${i.desc}\n*Key* : ${i.key}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'resepmakanan': // Update NEW FITUR	
				 
				 
				 
				if (args.length < 1) return reply(`mau nyari resep makanan apaan bang?`)
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/resepmasakan?q=${body.slice(13)}&apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.hasil.results) {
					teks += `*Title* : ${i.title}\n*Key* : ${i.key}\n*Time* : ${i.times}\n*Serving* : ${i.serving}\n*Difficulty* : ${i.difficulty}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'playstore': // Update NEW FITUR	
				 
				 
				 
				if (args.length < 1) return reply(`mau nyari game apaan bwang?`)
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/googleplay?q=${body.slice(10)}&apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.result.data.results) {
					teks += `*Title* : ${i.title}\n*App ID* : ${i.appId}\n*Url* : ${i.url}\n*Developer* : ${i.developer}\n*Price Text* : ${i.priceText}\n*Price?* : ${i.price}\n*Free?* : ${i.free}\n*Summary?* : ${i.summary}\n*Score Text?* : ${i.scoreText}\n*Score?* : ${i.score}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'joox': // Update NEW FITUR	
				 
				 
				 
				if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/joox?q=${body.slice(5)}&apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title* : ${i.lagu}\n*Album* : ${i.album}\n*Penyanyi* : ${i.penyanyi}\n*Publish Date* : ${i.publish}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'infofilm': // Update NEW FITUR	
				 
				 
				 
				if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/infofilm?q=${body.slice(10)}&apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Episode* : ${i.episode}\n*Movie ID* : ${i.movieId}\n*Views* : ${i.detail.views}\n*Duration* : ${i.detail.duration}\n*Release* : ${i.detail.release}\n*Dscription* : ${i.detail.description}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'infofilm2': // Update NEW FITUR	
				 
				 
				 
				if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/country/infofilm?search=${body.slice(11)}&apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Quality* : ${i.quality}\n*Movie ID* : ${i.movieId}\n*Trailer* : ${i.detail.trailer}\n*Views* : ${i.detail.views}\n*Genre* : ${i.detail.genre}\n*Director* : ${i.detail.director}\n*Aktor* : ${i.detail.actors}\n*Country* : ${i.detail.country}\n*Duration* : ${i.detail.duration}\n*Release* : ${i.detail.release}\n*Description* : ${i.detail.description}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'lk21': // Update NEW FITUR	
				 
				 
				 
				if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
				reply(`[❕] Sedang di proses.........`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/lk21?query=${body.slice(5)}&apikey=${ApiDevolover}`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Title* : ${i.title}\n*Genre* : ${i.genre}\n*Rating* : ${i.rating}\n*Duration* : ${i.duration}\n*Quality* : ${i.quality}\n*Trailer* : ${i.trailer}\n*Watch* : ${i.watch}\n=================\n`
				}
				reply(teks)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'howax':
			case 'hoax':
			case 'howak':
			case 'hoak':
				ikyy.updatePresence(from, Presence.composing)
				data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, { method: 'get' })
				teks = '────────────────────\n\n'
				for (let i of data.result) {
					teks += `Title : ${i.title}\n*Link* : ${i.link}\n*Tag* : ${i.tag}\n\n────────────────────\n`
				}
				reply(teks.trim())
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
			case 'encbinary':
			encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					ikyy.sendMessage(from, `${anu.result}`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'decbinary':
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					ikyy.sendMessage(from, `${anu.result}`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					
					case 'nsfwneko':
				    try {
				    res = await fetchJson(`https://api-shizuka.herokuapp.com/bj18?apikey=itsmeiky633`, {method: 'get'})
						buffer = await getBuffer(res.url)
						ikyy.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break 
				case 'asupan':
				reply('[❕] Sedang di proses.........')
                anu = await fetchJson(`https://api.shizukaa.xyz/asupan?apikey=itsmeiky633`)
                asup = await getBuffer(anu.result)
                ikyy.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'Asupannya Tuan:v'}) 
                ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'ocean': // Update NEW FITUR				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev1?text=${ct}&theme=underwater-ocean&apikey=${ApiDevolover}`)
				buffer = await getBuffer(anu.result.url)
				ikyy.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
case 'shortlink':
				 // Update NEW FITUR
				 
				 
				 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=${ApiDevolover}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
		case 'shortlink2':
				 // Update NEW FITUR
				ikyy.updatePresence(from, Presence.composing)
				reply(`[❕] Sedang di proses.........`)
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=${ApiDevolover}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
case 'lacakip': // Update NEW FITUR
				if (args.length < 1) return reply(`ip nya mana bwang?`)
				reply(`[❕] Sedang di proses.........`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/iplookup?ip=${body.slice(9)}&apikey=${ApiDevolover}`)
				teks = `➸ *ip* : ${anu.result.ip}\n*➸ Country :* ${anu.result.country}\n*➸ Region :* ${anu.result.region}\n*➸ Latitude :* ${anu.result.latitude}\n*➸ Longtitude :* ${anu.result.longtitude}\n*➸ Timezone :* ${anu.result.timezone}\n*➸ Org :* ${anu.result.org}\n*➸ As :* ${anu.result.as}\n*➸ City :* ${anu.result.city}\n*➸ Country Code :* ${anu.result.countryCode}\n*➸ Zip Code :* ${anu.result.zip}\n*➸ Link GMaps :* ${anu.result.maps}`
				ikyy.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }})
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                         
                                        var num = mek.participant
                                        const fku = {
                                                text: `@${num.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        ikyy.sendMessage(from, fku, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
                                        ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'nulis2':
				case 'tulis2':
				 
				 
				 
				if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 IKY baik hati')
				laysha = body.slice(8)
				reply('[❕] Sedang di proses.........')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
				ikyy.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'nulis1':
				case 'tulis1':
				 
				 
				 
				if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 IKY baik hati')
				laysha = body.slice(8)
				reply('[❕] Sedang di proses.........')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${laysha}&APIKEY=${XteamKey}`)
				ikyy.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'naruto':
				 
				 
				 
			
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=naruto&apikey=${VhtearKey}`, {method: 'get'})
					var naru = JSON.parse(JSON.stringify(anu.result));
					var to =  naru[Math.floor(Math.random() * naru.length)];
					nyew = await getBuffer(to)
					ikyy.sendMessage(from, nyew, image, { caption: 'naruto!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'minato':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=minato&apikey=${VhtearKey}`, {method: 'get'})
					var min = JSON.parse(JSON.stringify(anu.result));
					var ato =  min[Math.floor(Math.random() * min.length)];
					nyeq = await getBuffer(ato)
					ikyy.sendMessage(from, nyeq, image, { caption: 'minato!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'slap':
                    kapankah = body.slice(1)
                     
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ngentot lu ya?','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud?','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi','Ngontol Amat']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					ikyy.sendMessage(from, pod, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'boruto':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=boruto&apikey=${VhtearKey}`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nyet = await getBuffer(uto)
					ikyy.sendMessage(from, nyet, image, { caption: 'boruto!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'hinata':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hinata&apikey=${VhtearKey}`, {method: 'get'})
					var hina = JSON.parse(JSON.stringify(anu.result));
					var ta =  hina[Math.floor(Math.random() * hina.length)];
					nyei = await getBuffer(ta)
					ikyy.sendMessage(from, nyei, image, { caption: 'hinata!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'sasuke':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sasuke&apikey=${VhtearKey}`, {method: 'get'})
					var sasu = JSON.parse(JSON.stringify(anu.result));
					var ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nyeo = await getBuffer(ke)
					ikyy.sendMessage(from, nyeo, image, { caption: 'sasuke!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'sakura':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sakura&apikey=${VhtearKey}`, {method: 'get'})
					var sak = JSON.parse(JSON.stringify(anu.result));
					var kura =  sak[Math.floor(Math.random() * sak.length)];
					nyep = await getBuffer(kura)
					ikyy.sendMessage(from, nyep, image, { caption: 'sakura!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					//animefoto
				case 'unta':
				 
				 
				 
                  anu = await fetchJson(`https://api.vhtear.com/pinterest?query=unta&apikey=${VhtearKey}`, {method: 'get'})
					var unt1 = JSON.parse(JSON.stringify(anu.result));
					var unt2 =  unt1[Math.floor(Math.random() * unt1.length)];
					nyea = await getBuffer(unt2)
					ikyy.sendMessage(from, nyea, image, { caption: 'unta!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					//tokyoghoul
				case 'kaneki':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VhtearKey}`, {method: 'get'})
					var kan = JSON.parse(JSON.stringify(anu.result));
					var eki =  kan[Math.floor(Math.random() * kan.length)];
					nyes = await getBuffer(eki)
					ikyy.sendMessage(from, nyes, image, { caption: 'kaneki!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'picthewan':
					 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewanimut&apikey=${VhtearKey}`, {method: 'get'})
					var kan = JSON.parse(JSON.stringify(anu.result));
					var eki =  kan[Math.floor(Math.random() * kan.length)];
					nyed = await getBuffer(eki)
					ikyy.sendMessage(from, nyed, image, { caption: 'kaneki!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'toukachan':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ToukaKirishima&apikey=${VhtearKey}`, {method: 'get'})
					var tou = JSON.parse(JSON.stringify(anu.result));
					var ka =  tou[Math.floor(Math.random() * tou.length)];
					nyef = await getBuffer(ka)
					ikyy.sendMessage(from, nyef, image, { caption: 'toukachan!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'rize':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=RizeKamishiro&apikey=${VhtearKey}`, {method: 'get'})
					var ri = JSON.parse(JSON.stringify(anu.result));
					var ze =  ri[Math.floor(Math.random() * ri.length)];
					nyeg = await getBuffer(ze)
					ikyy.sendMessage(from, nyeg, image, { caption: 'rize chan!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'akira':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=akiramado&apikey=${VhtearKey}`, {method: 'get'})
					var ak = JSON.parse(JSON.stringify(anu.result));
					var ara =  ak[Math.floor(Math.random() * ak.length)];
					nyeh = await getBuffer(ara)
					ikyy.sendMessage(from, nyeh, image, { caption: 'akira chan!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'itori':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=itori&apikey=${VhtearKey}`, {method: 'get'})
					var it = JSON.parse(JSON.stringify(anu.result));
					var ori =  it[Math.floor(Math.random() * it.length)];
					nyej = await getBuffer(ori)
					ikyy.sendMessage(from, nyej, image, { caption: 'itori chan!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'dxd':
				    try {
					 
				 
				 
						res = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=dxd`, {method: 'get'})
						buffer = await getBuffer(res.result)
						 ikyy.sendMessage(from, buffer, image, {quoted: mek, caption: 'gw iri bangsat'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						 ikyy.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'kurumi':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=${VhtearKey}`, {method: 'get'})
					var kur = JSON.parse(JSON.stringify(anu.result));
					var imi =  kur[Math.floor(Math.random() * kur.length)];
					nyek = await getBuffer(imi)
					ikyy.sendMessage(from, nyek, image, { caption: 'kurumi chan!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'miku':
				 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=${VhtearKey}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyel = await getBuffer(ku)
					ikyy.sendMessage(from, nyel, image, { caption: 'miku chan!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'rem':
					 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=remrezero&apikey=${VhtearKey}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyez = await getBuffer(ku)
					ikyy.sendMessage(from, nyez, image, { caption: 'rem chan!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'ram':
					 
				 
				 
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ramrezero&apikey=${VhtearKey}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyex = await getBuffer(ku)
					ikyy.sendMessage(from, nyex, image, { caption: 'ram chan!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					
					case 'pictcewek':
					 
				 
				 
					reply('[❕] Sedang di proses.........')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cewekcantik&apikey=${VhtearKey}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyev = await getBuffer(ku)
					ikyy.sendMessage(from, nyev, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
					case 'pictcowok':
					 
				 
				 
					reply('[❕] Sedang di proses.........')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cowokganteng&apikey=${VhtearKey}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyeb = await getBuffer(ku)
					ikyy.sendMessage(from, nyeb, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'cersex':
					 
				 
				 
				
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cersex2`)
					reply(anu.result)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'nulispolio':
				case 'tulispolio':
				 
				 
				 
				if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 IKY baik hati')
				laysha = body.slice(8)
				reply('[❕] Sedang di proses.........')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${laysha}&APIKEY=${XteamKey}`)
				ikyy.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)
				ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Yang mau di tulis titit kah?')
				 
				 
				 
					teks = body.slice(7)
					reply('[❕] Sedang di proses.........')
					buff = await getBuffer(`https://api.vhtear.com/write?text=${teks}&apikey=${VhtearKey}`)
					ikyy.sendMessage(from, buff, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})
                                        await limitAdd(sender)
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break				
case 'daftar':
				 
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`Namanya kepanjangan kak :)`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`Umur min 10 tahun max 40 tahun`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					ikyy.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})
break


				case 'bugGc':
				case 'buggc':
						ikyy.toggleDisappearingMessages(from, 'Aowkwok')
					break
					case 'spamsms':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				reply(ind.wait())
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolhumankey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolhumankey}&nomor=${nomor}`)
                    reply("Success")
                    break
   //ANTILINK
        if (messagesC.includes("://chat.whatsapp.com/")) {
            if (!isGroup) return
            if (!isAntiLink) return
            if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
            ikyy.updatePresence(from, Presence.composing)
            if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
            var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
            setTimeout(() => {
                ikyy.groupRemove(from, [kic]).catch((e) => { reply(`*ERR:* ${e}`) })
            }, 3000)
            setTimeout(() => {
                ikyy.updatePresence(from, Presence.composing)
                reply("1detik")
            }, 2000)
            setTimeout(() => {
                ikyy.updatePresence(from, Presence.composing)
                reply("2detik")
            }, 1000)
            setTimeout(() => {
                ikyy.updatePresence(from, Presence.composing)
                reply("3detik")
            }, 0)
        } 
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
  



        if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => ikyy.groupRemove(from, sender))
                        .then(() => {
                            ikyy.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => ikyy.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }

              default:
			if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  
                  if (budy.includes(`syalom`)) {
                  reply(`waalaikumsalam`)
                  }
                  
                  
                  if (budy.includes(`tolol`)) {
                  reply(`jangan kasar bro!`)
                  }

		if (budy.includes(`Ngentod`)) {
                  reply(`Jaga Omongan gan:v`)
                  }

		

		

		if (budy.includes(`Hei`)) {
                  reply(`iyah ka`)
                  }
                  


		if (budy.includes(`hello`)) {
                  reply(`Haii`)
                  }

		if (budy.includes(`Thanks`)) {
                  reply(`Sama Sama`)
                  }

		if (budy.includes(`Makasih`)) {
                  reply(`Sama Sama`)
                  }


		if (budy.includes("Numa")){

		ikyy.updatePresence(from, Presence.composing)

		const loli = fs.readFileSync('./assets/numa')

        ikyy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

        const d = fs.readFileSync('./sticker/jget.webp');

        ikyy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})

        }
        if (budy.includes("Iri")){

		ikyy.updatePresence(from, Presence.composing)

		const loli = fs.readFileSync('./assets/iri.mp3')

        ikyy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

        const d = fs.readFileSync('./sticker/jget.webp');

        ikyy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang bos", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})

        }
if (budy.includes("dengerin ya")){

		ikyy.updatePresence(from, Presence.composing)

		const loli = fs.readFileSync('./assets/pale.mp3')
		ikyy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
const d = fs.readFileSync('./sticker/jget.webp');

        ikyy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj bale.bale", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})


        }
		if (budy.includes(`Bot`)) {
                const bot = fs.readFileSync('./assets/bot');
                ikyy.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
			if (body.startsWith(`${prefix}${command}`)) {

                  
			  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
            e = String(e)
            if (!e.includes("this.isZero")) {
                const time_error = moment.tz('Asia/Jakarta').format('HH:mm:ss')
                console.log(color(time_error, "white"), color("[  ERROR  ]", "aqua"), color(e, 'red'))
            
          }         
        }
    })

