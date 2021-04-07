var databaseModules = require('../modules/database');
var md5 = require('md5');

module.exports.login = (loginStr, pwd, cb) => {
  const conn = databaseModules.getConnection();
  databaseModules.connect(conn);
  const sql = `select username, account, enterprise_code as code from admin where username = '${loginStr}' and password = '${md5(pwd)}' or account = '${loginStr}' and password = '${md5(pwd)}'`;
  conn.query(sql, (err, result) => {
    if (err) {
      cb(err);
    } else if (result) {
      cb(null, result);
    }
  })
  conn.end();
}