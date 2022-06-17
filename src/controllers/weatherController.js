
const axios = require('axios')

const weatherDetails = async function(req , res){
    try{
        let apiKey = req.query.apiKey
        var options = {method: "get" , url : `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`}

        let resultLondon = await axios(options);
        let londonTemp = resultLondon.data.main.temp
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let resCities = []
        for(city of cities){
            var coptions = {method: "get" , url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`}
            let res = await axios(coptions)
            let obj = {city: city , temp: res.data.main.temp}
            resCities.push(obj)
        }
        resCities.sort((x , y)=>{
            return x.temp - y.temp
        })
        res.status(200).send({sortedArr : resCities})
    }
    catch(err){
        res.status(500).send({error : err.message})
    }
}

module.exports = {weatherDetails}
















