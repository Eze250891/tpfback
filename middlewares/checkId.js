const {Suplement} = require("../stock/suplement")

const checkId = async (req, res, next) => {
    try {
        const item = await Suplement.findById(req.params.id)
        if (item!== null) {
            next()
        } else {
            res.status(500).json({msg:"id invalido"})
        }
        
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {checkId}