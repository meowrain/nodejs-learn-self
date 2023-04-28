const express = require("express");
const router = express.Router();
const animeGirlsController = require('../../controllers/animeGirlsController')
router.get(animeGirlsController.getAllAnimeGirls)
     .post(animeGirlsController.createNewAnimeGirl)
module.exports = router;