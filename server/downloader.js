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
	username = req.query.username
	await igstory(username)
	.then((data) => {
	  res.json(data)
	})
})
  router.get("/playmp3", async(req, res, next) => {
    const query = req.query.query;
    if(!query) return res.json(loghandler.notquery)
    await ytPlayMp3(query)
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
    await ytPlayMp4(query)
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
