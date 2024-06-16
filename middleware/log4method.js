/**
 * 功能: 接口请求日志中间件
 * 作者: 郝海亮
 * 日期: 2019-12-16
 */
const moment = require('moment')

function log4method(req, res, next) {
    const runtime = moment().format('YYYY年MM月DD日 HH:mm:ss SSS')
    const { url, method, params, query, body } = req

    console.log('---------------------------------------')
    console.log(`运行时间: ${runtime}`)
    console.log(`接口名称: ${url}`)
    console.log(`method - ${method.toLowerCase()}`)

    if (Object.keys(params).length) {
        console.log('动态path的参数为：', params)
    }
    if (Object.keys(query).length) {
        console.log('路径中的search参数为：', query)
    }
    if (Object.keys(body).length) {
        console.log(`${method.toLowerCase()}中的body参数为: `, body)
    }

    next()
}

module.exports = log4method
