const axios = require("axios")

const getMemes = async function(req , res){
    try{
        let tempId = req.body.tempId
        let text0 = req.body.text0
        let text1 = req.body.text1
        let username = req.body.username
        let password = req.body.password
        
        var options = {
            method : "POST",
            url : `https://api.imgflip.com/caption_image?template_id=${tempId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }

        let result = await axios(options)
        res.status(200).send({data : result.data.data})
    }
    catch(err){
        res.status(500).send({error : err.message})
    }
    
}

module.exports = {getMemes}