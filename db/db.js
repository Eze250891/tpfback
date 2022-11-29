const mongoose = require ("mongoose")
require("dotenv").config()

const conect = async () => {
        try {
            await mongoose.connect(process.env.CONECTMONGO)
            console.log("ok")
        } catch {
            console.log ("error")
            
        }
}

module.exports = { conect} 