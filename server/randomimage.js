const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fs = require('fs')
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
const hx = require('hxz-api');
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

router.get('/waifu', async(req, res) => {
	var waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/waifu.json`)).data
	const result = waif[Math.floor(Math.random() * (waif.length))]
	data = await getBuffer(result)
    await fs.writeFileSync(__path +'/tmp/waifu.png', data)
    await res.sendFile(__path +'/tmp/waifu.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/waifu.png')
})
router.get('/husbu', async(req, res) => {
	var waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/husbu.json`)).data
	const result = waif[Math.floor(Math.random() * (waif.length))]
	data = await getBuffer(result)
    await fs.writeFileSync(__path +'/tmp/waifu.png', data)
    await res.sendFile(__path +'/tmp/waifu.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/waifu.png')
})
router.get('/loli', async(req, res) => {
	var waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
	const result = waif[Math.floor(Math.random() * (waif.length))]
	data = await getBuffer(result)
    await fs.writeFileSync(__path +'/tmp/waifu.png', data)
    await res.sendFile(__path +'/tmp/waifu.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/waifu.png')
})
router.get('/milf', async(req, res) => {
	var waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/milf.json`)).data
	const result = waif[Math.floor(Math.random() * (waif.length))]
	data = await getBuffer(result)
    await fs.writeFileSync(__path +'/tmp/waifu.png', data)
    await res.sendFile(__path +'/tmp/waifu.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/waifu.png')
})
router.get('/emoji2png', async(req, res, next) => {
	const Emoji = req.query.text;
	if(!Emoji) return res.json(loghandler.nottext)
	  emoji.get(Emoji)
	  .then(img_emoji => {
		const result = {
		  status: true,
		  code: 200,
		  creator: 'erdwpe',
		  result: img_emoji.images[0].url
		}
		res.json(result)
	  })
	
	  .catch((err) => {
		res.json(loghandler.error)
	  })
  });
router.get('/cosplay', async(req, res) => {
	var waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json`)).data
	const result = waif[Math.floor(Math.random() * (waif.length))]
	data = await getBuffer(result)
    await fs.writeFileSync(__path +'/tmp/waifu.png', data)
    await res.sendFile(__path +'/tmp/waifu.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/waifu.png')
})

module.exports = router