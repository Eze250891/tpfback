const express = require('express')
const app = express()
const logger = require("morgan")
const cors = require("cors")

const indexRouter = require("./routes/index")
const {conect} = require ("./db/db")

app.use(logger("dev"))
app.use(express.json())
app.use(cors())



app.use("/home", indexRouter)
conect()




module.exports = app