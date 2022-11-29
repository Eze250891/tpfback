const {Suplement} = require("../stock/suplement")

const verProduct = async (req, res) => {
    const item = await Suplement.findById(req.params.id)
    res.status(200).json({item})

}
module.exports = verProduct   