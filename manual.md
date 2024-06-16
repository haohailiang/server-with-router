# 项目开发修改文本
```
# 选择要分享的mock地址
routes.js

# json字符串
```
const responseData = {}

module.exports = responseData
```

# 发送文件
```
res.sendFile('file.zip');
```

# get请求
```
const get_show_menu_home = require('./system_api/get_show_menu_home');
app.get('/api/system_api/:path/get_show_menu', (req, res) => {  
    const { query: { haha }, params: { path } } = req
    console.log( 'path - param: ', path )
    res.json( get_show_menu_home )
});
```
# post请求
```
const get_show_menu_home = require('./system_api/get_show_menu_home');
app.post('/user/show', (req, res) => {
    const { body: { ts } } = req
    res.json({ ...userInfo, ts })
});
```

# 后边的参数会被代理过去
charles
map from: /api/system_api/get_show_menu
map to: /api/system_api/get_show_menu
```

# 用户权限
```
app.get('/login', (req, res) => {
    // res.cookie("name",'zhangsan',{maxAge: 20000, httpOnly: true});  
    res.cookie("name",'zhangsan',{maxAge: 20000, httpOnly: true, signed: true});  
   //HttpOnly 默认 false 不允许 客户端脚本访问 
   res.json( {success: '登录成功！'} );
});

app.get('/logout', (req, res) => {
    res.cookie("name",'zhangsan',{maxAge: 0, httpOnly: true});  
   //HttpOnly 默认 false 不允许 客户端脚本访问 
   res.json( {success: '注销成功！'} );
});

app.get('/admin', (req, res) => {
    // if (req.cookies.name === 'zhangsan') {
    if (req.signedCookies.name === 'zhangsan') {
        res.json( {success: '机密内容！'} );
    } else {
        res.json( {success: '请先登录！'} );
        // res.redirect('/login');
    }
});
```

# 
```
router.all(`${prefix}/alarmTypes`, (req, res) => {
    res.status(404)
    res.json({
        statusCode: 200,
        message: 'todo'
    })
})
```
