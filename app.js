const express = require('express')
const bodyParser = require('body-parser')
const items = require('./routes/api/items')
require('./db/mongoose')

const app = express();

app.use(items)
const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log("Server running on port",port)
})
app.use(bodyParser.json())

