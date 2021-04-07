const databaseModules = require('../modules/database');
///////////////////////////////////
//访问数据库，具体的SQL语句
//获取线上设备信息
////////////////////////////////////

module.exports.queryOnlineEquipmentList = (sql, cb) => {
  const conn = databaseModules.getConnection();
  databaseModules.connect(conn);
  conn.query(sql, (err, result) => {
    if (err) {
      cb(err);
    }
    cb(null, result);
  })
  conn.end();
}