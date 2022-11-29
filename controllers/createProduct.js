const {Suplement} = require("../stock/suplement")
const {validationResult} = require('express-validator')

const createProduct= async (req, res) =>{
    try {
         const err = validationResult(req)
 
         if (err.isEmpty()) {
             const item = new Suplement(req.body)
             await item.save()
             res.status(201).json({item})
             
         } else {
             res.status(501).json({err})
         }
    } catch (error) {
         res.status(501).json({error})
    }
 }

 module.exports = createProduct