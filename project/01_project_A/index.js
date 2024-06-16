const express = require('express')

const router = express.Router()

const daxia = require('./daxia/index.js')
const pinduoduo = require('./pinduoduo/index.js')

router.use(daxia)
router.use(pinduoduo)

module.exports = router
