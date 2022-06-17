const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")
const memeController = require("../controllers/memeController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/getByDistrictId", CowinController.getByDistrictidDate)

router.get("/weather/allDetails" , weatherController.weatherDetails )

router.post("/memes/getMeme" , memeController.getMemes)



module.exports = router;