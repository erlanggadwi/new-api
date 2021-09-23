const express = require('express')
var router = express.Router();
const hx = require('hxz-api');
//scraper
const { tiktok, mediafireDl } = require('../scraper/index'); 
const { igDownload, ytPlayMp4, ytPlayMp3, twitter, igStalk } = require('../scraper/igdl'); 
const { data } = require('cheerio/lib/api/attributes');

router.get("/playmp3", async(req, res, next) => {
    const query = req.query.query;
    if(!query) return res.json(loghandler.notquery)
    ytPlayMp3(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
});

router.get("/playmp4", async(req, res, next) => {
    const query = req.query.query;    
    if(!query) return res.json(loghandler.notquery)
    ytPlayMp4(query)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
});
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
router.get('/tiktok', async(req, res) => {
	var url = req.query.url
	if (!url) return res.json({ message: 'masukan parameter Link' })
	var hasil = await tiktok(url)
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
	router.get('/twitter', async(req, res) => {
		var link = req.query.link
		if (!link) return res.json({ message: 'masukan parameter Link' })
		var hasil = await twitter(link)
		try {
			res.json(hasil)
		} catch(err) {
			console.log(err)
			res.json({ message: 'Ups, error' })
		}
	})
router.get('/igstalk', async(req, res, next) => {
			const username = req.query.username;
			if(!username) return res.json(loghandler.notquery)
			igStalk(username)
			  .then((result) => {
				res.json(result)
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