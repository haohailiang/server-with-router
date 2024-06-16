const express = require('express')

const router = express.Router()

const searchApi01 = require('./mock/01_search')
// comment
router.get('/mock/2016/api/search', (req, res) => {
    // const { query: { todo } } = req
    setTimeout(() => {
        const time = Date.now()
        res.json({ ...searchApi01, time })
    }, 3000)
})

const tokenApi02 = require('./mock/02_token')
// comment
router.get('/mock/2016/api/token', (req, res) => {
    setTimeout(() => {
        res.json(tokenApi02)
    }, 2000)
})

const userInfoApi03 = require('./mock/03_user_info')
// comment
router.get('/mock/2016/api/userinfo', (req, res) => {
    res.json(userInfoApi03)
})

module.exports = router
