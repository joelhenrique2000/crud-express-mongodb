var express = require('express')
var router = express.Router()

var { read, create, remove, update } = require('../controller/product')

router.get('/', read);

router.post('/', create);

router.delete('/', remove);

router.put('/', update);

module.exports = router