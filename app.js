var express = require("express");
var bodyParser = require("body-parser");
var server = express();
var port = 8088;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// 设置统一的响应格式
var resextra = require("./modules/resextra");
server.use(resextra);

// 拦截器及跨域
server.all('*',
	(req, res, next) => {
    // 跨域配置
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
		// res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
		res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
		res.header("X-Powered-By", ' 3.2.1')
		res.header("Content-Type", "application/json;charset=utf-8");
		if (req.method == 'OPTIONS') res.sendStatus(200)
		/*让options请求快速返回*/ else next()
	},
	(req, res, next) => {
    // 校验
		const { originalUrl, headers } = req;
		// console.log(headers);
		if (originalUrl === '/users/login') {
			next();
		} else {
			// token校验
			
			next();
		}
	}
);

// 路由
server.use('/users', require('./routes/users'));
server.use('/equipmentIn', require('./routes/equipmentIn'));

// 启动监听
server.listen(port, () => console.log("server api is runing at http://localhost:8088/"));