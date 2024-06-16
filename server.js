let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let moment = require('moment');
const http = require('http');
const cors = require('cors');

let log4method = require('./middleware/log4method');
let routes = require('./routes');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('123456'));
app.use(log4method);
// app.use(setHeader);
app.use(cors());

app.use(express.static('public', {
    extensions: [
        'html', 'htm'
    ]
}));
app.use(routes);

let runtime = moment().format('YYYY年MM月DD日 HH:mm:ss SSS');
console.log(`服务重启时间: ${runtime}`);

let httpServer = http.createServer(app);
httpServer.listen(8090, () => {
    console.log('http://localhost:8090/');
})
