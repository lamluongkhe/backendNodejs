const express = require('express')

var router = express.Router()



router.get('/',(req, res) => {
    res.json('api')
})



router.get('/product',(req, res) => {
    res.json('api of product')
})

router.get('/:id',(req, res) => {
    res.json('api' + req.params.id)
})


module.exports = router