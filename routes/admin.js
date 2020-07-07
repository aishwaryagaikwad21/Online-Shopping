const express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.send('Admin page')
})

module.exports = router