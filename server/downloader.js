const express = require('express')
var router = express.Router();

//scraper
const { igDownload, ytPlayMp4, ytPlayMp3, igstory, tiktok, mediafireDl } = require('../scraper/index') 

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
router.get('/igstory', async (req, res, next) => {
	var username = req.query.username
	if (!username) return res.json({ message: 'masukan parameter Link' })
	//var hasil2 = await igstory(username)
	try {
		res.json(data)
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
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
