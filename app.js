const express = require('express')
const path = require('path');
const route = require('./routes/router')
const admin = require('./routes/admin')
require('./db/mongoose')

const app = express();


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')));
app.use(route)
app.use('/admin',admin)


const port = 3000
app.listen(port,function(){
    console.log('Server running on port',port)
})