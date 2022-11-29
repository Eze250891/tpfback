const {Suplement} = require("../stock/suplement")


const verStock = async(req, res) => {
    const items = await Suplement.find()
    res.status(200).json({items})
}


module.exports = { verStock}