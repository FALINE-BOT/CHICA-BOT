const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}


╭─────❖ ❰ *IKY BOT* ❱ ❖────────╮  
├❖➣NAMA : ${pushname}
├❍➣UANG : Rp:${uangku}
├❖➣XP : ${reqXp}
├❍➣LEVEL : ${getLevelingLevel(sender)}
├❖➣TOTAL USER:${botName} : ${_registered.length}
╰────────────────────────╯

╭◪ 𝐑𝐮𝐥𝐞𝐬𝐒 
╰────────────────────────╮  
╭────────────────────────╯
├❖ *Spam : Auto Block!*
├❖ *Beri Jeda 5 Detik!*
├❖ *No Vc/Tlpn=Block!*
├❖ *Donasi Sultan Buat Apikey!*
├❖ *Note Bot Belum Jadi Sepenuhnya!*
╰────────────────────────╯

╭◪ Simpel
├⊱❥ *${prefix}info*
├⊱❥ *${prefix}donasi*
├⊱❥ *${prefix}owner*
├⊱❥ *${prefix}rules*
├⊱❥ *${prefix}iklan*
├⊱❥ *${prefix}bingungcok*
╰───────────────────────╯
╭◪ Maker Menu
├❖ *${prefix}tahta [text]*
├❖ *${prefix}cloudtext [text]*
├❖ *${prefix}pornhub [text&text]*
├❖ *${prefix}glitchtext [text&text]*
├❖ *${prefix}apiteks &[text]*
├❖ *${prefix}bikinquote [tema&text]*
├❖ *${prefix}ninjalogo [text]*
├❖ *${prefix}halloweentext [text]*
├❖ *${prefix}lovemake [text]*
├❖ *${prefix}metaltexs [text]*
╰───────────────────────╯
╭◪ Stiker Menu
├❍ *${prefix}ttp [text]*
├❍ *${prefix}ttpwarna [perbaikan]*
├❍ *${prefix}stiker [foto/tag]*
├❍ *${prefix}sticker [video/foto]*
├❍ *${prefix}toimg [tag stiker]*
╰───────────────────────╯
╭◪ Edukasi
├⊱❥ *${prefix}brainly*
├⊱❥ *${prefix}nulis*
├⊱❥ *${prefix}nulisbkiri*
├⊱❥ *${prefix}nulisbkanan*
├⊱❥ *${prefix}nulispolio*
╰───────────────────────╯
╭◪ 18+ Menu Sange
├❍ *${prefix}blowjob*
├❍ *${prefix}bokep*
├❍ *${prefix}randomhentong*
├❍ *${prefix}indohot*
├❍ *${prefix}cersex*
╰───────────────────────╯
╭◪ Umum
├❖ *${prefix}pinterest [cari gambar]*
├❖ *${prefix}mutual [cari jodoh]*
├❖ *${prefix}next*
├❖ *${prefix}virtex [no di gc iky]*
├❖ *${prefix}virtek2*
├❖ *${prefix}timer*
├❖ *${prefix}bitly*
├❖ *${prefix}happymod [apk mod]*
├❖ *${prefix}resepmakanan*
├❖ *${prefix}beritahoax*
├❖ *${prefix}stalkig [@user]*
├❖ *${prefix}quotes*
├❖ *${prefix}bucin*
├❖ *${prefix}tts [kode bahsa]*
╰───────────────────────╯
╭◪ Group 
│➸ *${prefix}welcome* ⟪ 1/0 ⟫
│➸ *${prefix}leveling* ⟪ 1/0 ⟫
│➸ *${prefix}event* ⟪ 1/0 ⟫
│➸ *${prefix}simih* ⟪ 1/0 ⟫
│➸ *${prefix}nsfw* ⟪ 1/0 ⟫
│➸ *${prefix}grup* ⟪ buka/tutup ⟫
│➸ *${prefix}add*
│➸ *${prefix}kick*
│➸ *${prefix}hedsot*
│➸ *${prefix}linkgrup*
│➸ *${prefix}promote*
│➸ *${prefix}demote*
│➸ *${prefix}setname*
│➸ *${prefix}setdesc*
│➸ *${prefix}leave*
│➸ *${prefix}tagall*
│➸ *${prefix}admin*
│➸ *${prefix}level*
│➸ *${prefix}fitnah*
│➸ *${prefix}hidetag*
│➸ *${prefix}hidetag5*
╰───────────────────────╯
╭◪ Anime 
├⊱❥ *${prefix}anime*
├⊱❥ *${prefix}animesaran2*
├⊱❥ *${prefix}animesaran*
├⊱❥ *${prefix}blowjob*
├⊱❥ *${prefix}neko*
├⊱❥ *${prefix}nekonime*
├⊱❥ *${prefix}wibu*
├⊱❥ *${prefix}randomhentong*
├⊱❥ *${prefix}loli*
├⊱❥ *${prefix}loli2*
├⊱❥ *${prefix}husbu*
├⊱❥ *${prefix}pokemon*
├⊱❥ *${prefix}anjing*
├⊱❥ *${prefix}naruto*
├⊱❥ *${prefix}minato*
├⊱❥ *${prefix}sakura*
├⊱❥ *${prefix}itori*
├⊱❥ *${prefix}hinata*
├⊱❥ *${prefix}kaneki*
├⊱❥ *${prefix}miku*
├⊱❥ *${prefix}unta*
├⊱❥ *${prefix}rize*
├⊱❥ *${prefix}akira*
├⊱❥ *${prefix}kurumi*
├⊱❥ *${prefix}pictcewek*
├⊱❥ *${prefix}pictcowok*
├⊱❥ *${prefix}ram*
├⊱❥ *${prefix}rem*
├⊱❥ *${prefix}toukacahan*
╰──────────────────────╯
╭◪ Download
├❖ *${prefix}play [judul no link]*
├❖ *${prefix}ytmp3 [perbaikan]*
├❖ *${prefix}ytmp4 [perbaikan]*
├❖ *${prefix}yutubdl [link]*
├❖ *${prefix}tiktod*
├❖ *${prefix}joox*
╰───────────────────────╯
╭◪ Gabut
│➸ *${prefix}apakah*
│➸ *${prefix}bisakah*
│➸ *${prefix}kapankah*
│➸ *${prefix}hobby*
│➸ *${prefix}rate*
│➸ *${prefix}seberapagay*
│➸ *${prefix}nangis*
│➸ *${prefix}cium*
│➸ *${prefix}peluk*
│➸ *${prefix}truth*
│➸ *${prefix}dare*
│➸ *${prefix}timer**
╰────────────────────────╯
╭◪ Sound
├⊱❥ *${prefix}iri*
├⊱❥ *${prefix}bot*
├⊱❥ *${prefix}pale*
├⊱❥ *${prefix}yamate*
├⊱❥ *${prefix}sound*
├⊱❥ *${prefix}sound[1-7]*
├⊱❥ *${prefix}sound[11-17]*
├⊱❥ *${prefix}sound[21-25]*
╰────────────────────────╯
╭◪ Owner Bot
├❖ *${prefix}bc*
├❖ *${prefix}clearall*
├❖ *${prefix}block*
├❖ *${prefix}unblock*
├❖ *${prefix}clone*
├❖ *${prefix}setppbot*
├❖ *${prefix}setreply*
├❖ *${prefix}setprefix*
├❖ *${prefix}ban*
├❖ *${prefix}unban*
╰────────────────────────╯

╭◪ INFO CREATOR
├❖ *Author : Iky Ads*
├❍ *Insta    : @Ikyy_ads*
├❖ *Youtub : Ikyy Ads*
├❍ *wasap : wa.me/6283141727903*
╰────────────────────────╯

           ║▌│█║▌│ █║▌│█│║▌║
           ║▌│█║▌│ █║▌│█│║▌║
   
            [ *POWERED BY ${ownerName}* ]`
}
exports.help = help
