const express = require("express");
var router = express.Router();
const petPetGif = require("pet-pet-gif");
const {
  webp2mp4Url
} = require("../scraper/pinterest");
var { EmojiAPI } = require("emoji-api");
var emoji = new EmojiAPI();
const canvacord = require("canvacord");

router.get("/pet", async (param, res, next) => {
  const avatarURL = param.query.avatarURL;
  if (!avatarURL) return res.json({ message: "masukan parameter Username" });
  let animatedGif = await petPetGif(param.query.avatarURL, {
    resolution: 512, // The width (or height) of the generated gif
  });
  res.set({ "Content-Type": "image/gif" });
  res.send(animatedGif);
});
router.get("/triggered", async (param, res, next) => {
  const avatarURL = param.query.avatarURL;
  if (!avatarURL) return res.json({ message: "masukan parameter Username" });
  let triggerd = await canvacord.Canvas.trigger(param.query.avatarURL);
  res.set({ "Content-Type": "image/gif" });
  res.send(triggerd);
});
router.get("/webptomp4", async (req, res) => {
  var url = req.query.url;
  if (!url) return res.json({ message: "masukan parameter query" });
  var result = await webp2mp4Url(url);
  try {
    res.json(result);
  } catch (err) {
    console.log(err);
    res.json({ message: "Ups, error" });
  }
});

router.get("/emoji2png", async (req, res, next) => {
  const Emoji = req.query.text;
  if (!Emoji) return res.json(loghandler.nottext);
  emoji
    .get(Emoji)
    .then((img_emoji) => {
      const result = {
        result: {
          status: true,
          code: 200,
          creator: "erdwpe",
          result: img_emoji.images[0].url,
        },
      };
      res.json(result);
    })

    .catch((err) => {
      res.json(loghandler.error);
    });
});
module.exports = router