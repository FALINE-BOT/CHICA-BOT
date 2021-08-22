<div align="center">
<img src="https://l.top4top.io/p_2059zl44m1.jpg" alt="CHICA BOT" width="300" />

# _**CHICA BOT**_

> CHICA BOT is a multipurpose WhatsApp bot using wa-automate-nodejs library!
>
>

<h3 align="center">Made with ❤️ by</h3>
<p align="center">
  <a href="https://github.com/naisayuriza"><img src="https://i.top4top.io/p_20597zxhj1.jpg" height="128" width="128" /></a>
  <a href="https://github.com/NAY-JUGA"><img src="https://k.top4top.io/p_2059eqn5j1.jpg" height="128" width="128" /></a>
  <a href="https://github.com/FALINE-BOT"><img src="https://l.top4top.io/p_2059zl44m1.jpg" height="128" width="128" /></a>
</p>

<p align="center">
  <a href="https://github.com/FALINE-BOT"><img title="Author" src="https://img.shields.io/badge/AUTHOR-RHISHNA-orange.svg?style=for-the-badge&logo=github"></a>
</p>


<p align="center">
  <a href="https://github.com/FALINE-BOT/CHICA-BOT#requirements">Requirements</a> •
  <a href="https://github.com/FALINE-BOT/CHICA-BOT#installation">Installation</a> •
  <a href="https://github.com/FALINE-BOT/CHICA-BOT#features">Features</a> •
  <a href="https://github.com/FALINE-BOT/CHICA-BOT#thanks-to">Thanks to</a> •
  <a href="https://github.com/FALINE-BOT/CHICA-BOT#license">License</a>
</p>

<h4 align="center">
  <a href="https://chat.whatsapp.com/BtCDszkD2UzFYMRqOO3jbO">JOIN WA BOT CHICA-BOT KAK!</a>
</h4>
</div>

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://www.gyan.dev/ffmpeg/builds/)
* [libwebp](https://developers.google.com/speed/webp/download)
* Any text editor

# Installation
## 📝 Cloning this repo
```cmd
> git clone https://github.com/FALINE-BOT/CHICA-BOT.git
> cd CHICA-BOT
```

## ✍️ Editing the file
Edit the required value in `config.json`.
```json
{
    "ownerBot": "62812xxxxxxxx@c.us", 
    "prefix": "$",
    "uaOverride": "WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
    "itech": "api-key",
    "nao": "api-key",
    "vhtear": "api-key",
    "melodic": "administrator",
    "tobz": "BotWeA",
    "lol": "api-key"
}
```

`ownerBot`: your WhatsApp number.  
`prefix`: Based on the latest update, you don't need to change the prefix, because this bot has multiple prefix.  
`uaOverride`: your user agent.  
`itech`: I-Tech API key. You can get it [here](https://api.i-tech.id) by creating an account. After that, set your server/host static IP in [here](https://api.i-tech.id/settings/profile).  
`nao`: SauceNAO API key. You can get it [here](https://saucenao.com/user.php) by creating an account.  
`vhtear`: VHTear API key. You can get it [here](https://api.vhtear.com/) by purchasing his API key.  
`melodic`: MelodicXT API key. You can use `administrator` key.   
`tobz`: Tobz API key. You can use `BotWeA` key.   
`lol`: LolHuman API key. You can get it [here](https://lolhuman.herokuapp.com/) by creating an account. 

## 🗣️ Changing language
If you want to change the language to English, replace all `ind` function to `eng`.   
Example:
```js
ind.wrongFormat()
```
To:
```js
eng.wrongFormat()
```

## 🧾 Installing the Tesseract
* Download the Tesseract program [here](https://s.id/vftesseract).
* Run the downloaded tesseract program with run As Administrator.
* Run installation.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\Tesseract-OCR;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've Tesseract installed, verify that it's working by running this command to see version number:
```cmd
> tesseract -version
```

## 🛠️ Installing the FFmpeg
* Download one of the available versions of FFmpeg by clicking [this link](https://www.gyan.dev/ffmpeg/builds/).
* Extract the file to `C:\` path.
* Rename the extracted folder to `ffmpeg`.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've FFmpeg installed, verify that it's working by running this command to see version number:
```cmd
> ffmpeg -version
```

## 📷 Installing the libwebp
The installation is same as you install FFmpeg but whatever. I will make it clear.
* Download the file according to the OS you are using by clicking [this link](https://developers.google.com/speed/webp/download).
* Extract the file to `C:\` path.
* Rename the extracted file to `libwebp`.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\libwebp\bin;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've libwebp installed, verify that it's installed by running this command to see version number:
```cmd
> webpmux -version
```

## 🔍 Installing the dependencies
```cmd
> npm install
```

## 🆗 Running the bot
Regular node:
```cmd
> npm start
```

PM2:
```cmd
> pm2 start index.js
> pm2 monit
```

PM2 with cron job (restart after 5 hours):
```cmd
> pm2 start index.js --cron "* */5 * * *"
> pm2 monit
```

After that scan the QR code using your WhatsApp in your phone!

# Features
CEK AJ KAK:3

# Thanks to
* [`open-wa/wa-automate-nodejs`](https://github.com/open-wa/wa-automate-nodejs)
* [`YogaSakti/imageToSticker`](https://github.com/YogaSakti/imageToSticker)
* [`RHISHNA`](https://github.com/naisayuriza)
* [`RHISHNA`](https://github.com/FALINE-BOT)
* [`ARIN`](https://github.com/NAY-JUGA)

# License
**CHICA BOT** © [RHISHNA](https://github.com/naisayuriza), released under the MIT License.
Authored and maintained by RHISHNA.

<p align="center">
  <a href="<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FFALINE-BOT%2FCHICA-BOT?ref=badge_large" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FFALINE-BOT%2FCHICA-BOT.svg?type=large"height="128" width="128"/></a> 
