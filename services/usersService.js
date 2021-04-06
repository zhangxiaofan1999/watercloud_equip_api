var usersDao = require("../dao/usersDao");


module.exports.login = (loginStr, pwd, cb) => {
  usersDao.login(loginStr, pwd, (err, result) => {
    cb(err, result);
  })
}