const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
require("./nodemailer")
const PORT = 6969

require('./db')

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...   `)
})


const router=require("./Routes/Router")
app.use(router)