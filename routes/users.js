var express = require("express");
const authorization = require('../modules/authorization');
var router = express.Router();


// 获取业务模块
var usersServ = require('../services/usersService');


router.post('/login',
  // 参数校验
  (req, res, next) => {
    // console.log(req.body, "res.body");
    next();
  },
  // 业务逻辑
  (req, res, next) => {
    const { loginStr, pwd } = req.body;
    usersServ.login(
      loginStr,
      pwd,
      (err, loginResult) => {
        if (err) {
          return res.sendResult(null, 500, err);
        }
        if (!loginResult || !loginResult.length || loginResult.length == 0) {
          return res.sendResult(null, 404, '登录失败，请检查登录账户和密码的正确性');
        }
        loginResult[0]["token"] = authorization.createToken();
        res.sendResult(loginResult[0], 200, '登录成功')
      }
    )
  }
);


module.exports = router;