const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const Item = require('../../models/item')

router.get('/',(req,res)=>{
    Item.find().sort({ date: -1}).then(item => res.json(item)).catch((err)=>{
        res.status(404).send(err)
    })
})

router.post('/',jsonParser,(req,res)=>{
    const newItem = new Item({
        name:req.body.name
    });
    newItem.save().then(item => res.json(item))
})

router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id).then(item =>{
        item.remove().then(()=> res.json({success:true}))
    }).catch(err => res.status(404).json({success:false}))
})

module.exports = router;