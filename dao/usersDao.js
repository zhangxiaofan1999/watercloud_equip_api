var databaseModules = require('../modules/database');

module.exports.login = (loginStr, pwd, cb) => {
  const conn = databaseModules.getConnection();
  databaseModules.connect(conn);
  const sql = `select username, account, enterprise_code as code from admin where username = ${loginStr} and password = ${pwd} or account = ${loginStr} and password = ${pwd}`;
  conn.query(sql, (err, result) => {
    if (err) {
      cb(err);
    }
    cb(null, result);
  })
  conn.end();
}