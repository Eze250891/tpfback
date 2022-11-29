const {Suplement} = require("../stock/suplement")
const {validationResult} = require("express-validator")

const editProduct = async(req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Suplement.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({msg:"se actualizo el producto"})
            
        } else {
            res.status(501).json({err})
        }
    } catch (error) {
        res.status(501).json({error})
    }
}
module.exports = editProduct