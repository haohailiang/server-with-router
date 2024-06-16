/**
 * 功能: 设置返回头部中间件[设置跨域访问]
 * 作者: 郝海亮
 * 日期: 2019-12-16
 */
function setHeader(req, res, next) {
    // res.header('Access-Control-Allow-Headers', 'Accept, Accept-Encoding, Accept-Language, Cache-Control, Connection, Content-Type, eventName, Host, Location, Origin, Pragma, Referer, Agent, X-Requested-With, sec-ch-ua, sec-ch-ua-mobile, Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site, Sec-Fetch-User, Upgrade-Insecure-Requests, User-Agent, SZC-Auth-token')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE')
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Expose-Headers', 'Content-Encoding')
    res.header('Access-Control-Request-Headers', 'x-requested-with, Content-Type')
    res.header('Connection', 'keep-alive')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.header('Server', 'haohailiang')
    next()
}

module.exports = setHeader
