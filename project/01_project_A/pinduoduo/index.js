/**
 * 功能: 拼多多angular框架
 * 作者: 郝海亮
 * 日期: 2022-09-10
 */

const express = require('express')

const router = express.Router()

const apiBanners = require('./mock/01_banners.js')
// comment
router.get('/mock/2016/api/banners', (req, res) => {
    // const { query: { todo } } = req
    res.json(apiBanners)
})

const apiChannels = require('./mock/02_channels.js')
// comment
router.get('/mock/2016/api/channels', (req, res) => {
    // const { query: { todo } } = req
    res.json(apiChannels)
})

const apiTabs = require('./mock/03_tabs.js')
// comment
router.get('/mock/2016/api/tabs', (req, res) => {
    // const { query: { todo } } = req
    res.json(apiTabs)
})

const apiAds = require('./mock/04_ads.js')
// comment
router.get('/mock/2016/api/ads', (req, res) => {
    // const { query: { todo } } = req
    res.json(apiAds)
})

const apiProducts = require('./mock/05_products.js')
// comment
router.get('/mock/2016/api/products', (req, res) => {
    // const { query: { todo } } = req
    res.json(apiProducts)
})

const apiProfileGet = require('./mock/06_profile.js')
// comment
router.get('/mock/2016/api/profile', (req, res) => {
    // const { query: { todo } } = req
    res.json(apiProfileGet)
})

const apiProfilePost = require('./mock/07_profile.js')
// comment
router.post('/mock/2016/api/profile', (req, res) => {
    // const {
    //     body: {
    //         id
    //     }
    // } = req
    res.json(apiProfilePost)
})

const apiProductVariants = require('./mock/08_product-variants.js')
// comment
router.get('/mock/2016/api/productVariants', (req, res) => {
    // const { query: { todo } } = req
    res.json(apiProductVariants)
})

module.exports = router
