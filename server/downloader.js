const express = require('express')
var router = express.Router();
const hx = require('hxz-api');
//scraper
const { igDownload, ytPlayMp4, ytPlayMp3, igstory, tiktok, mediafireDl } = require('../scraper/index'); 
const { data } = require('cheerio/lib/api/attributes');

router.get('/tiktok', async(req, res) => {
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter Link' })
	var hasil = await tiktok(link)
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/igdl', async(req, res) => {
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter Link' })
	var hasil = await igDownload(link)
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

router.get('/igstory', async(req, res, next) => {
	const username = req.query.username;
	if(!username) return res.json({ message: 'masukan parameter Username' })
	hx.igstory(username)
		.then(data => {
		res.json(data)
	  })
	});
router.get('/igstalk', async(req, res, next) => {
	const username = req.query.username;
	if(!username) return res.json({ message: 'masukan parameter Username' })
	hx.igstalk(username)
		.then(data => {
		res.json(data)
	  })
	});
	router.get('/youtubedl', async(req, res, next) => {
	const link = req.query.link;
	if(!link) return res.json({ message: 'masukan parameter Link' })
	hx.youtube(link)			
	.then(result => {			
	res.json(result)
			  })
			});
router.get('/mediafireDl', async(req, res) => {
	var link = req.query.link
	if (!link) return res.json({ message: 'masukan parameter Link' })
	var hasil = await mediafireDl(link)
	try {
		res.json(hasil)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})


module.exports = router
