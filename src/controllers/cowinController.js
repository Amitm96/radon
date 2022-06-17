let axios = require("axios")



let getByDistrictidDate = async function (req, res) {
    try {
        let districtId = req.query.districtId
        let date = req.query.date
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getByDistrictidDate = getByDistrictidDate