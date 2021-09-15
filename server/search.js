const express = require('express')
var router = express.Router();
//scraper
const { pinterest, webpToMp4, covid } = require('../scraper/pinterest') 

router.get('/google', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var google = require('google-it')
	var result = google({'query': query}).then(result => {
	res.json({ result })
	})
})
router.get('/pinterest', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var result = await pinterest(query)
	res.json({ result })
})
router.get('/covid', async(req, res, next) => {
	//const link = req.query.link;
	//if(!link) return res.json(loghandler.notlink)		
	covid()			
	.then(result => {			
	res.json(result)
			  })
			});		
			router.get("/webp", async(req, res, next) => {
				const path = req.query.query;    
				if(!path) return res.json(loghandler.notquery)
				ytPlayMp4(path)
					.then((result) => {
						res.json(result);
					})
					.catch((error) => {
						res.json(error);
					});
			});
			module.exports = router