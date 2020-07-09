const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mern-shopping-cart',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log('Connected to database')
}).catch((err) =>{
    console.log(err)
})
