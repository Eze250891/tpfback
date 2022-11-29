const {Suplement} = require("../stock/suplement")

const delProduct = async (req, res) => {
    const item = await Suplement.findByIdAndDelete(req.params.id)
    res.status(204).json({msg:"el siguiente item fue eliminado", item})
}

module.exports = delProduct