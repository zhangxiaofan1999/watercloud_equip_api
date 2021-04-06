const databaseModules = require('../modules/database');
///////////////////////////////////
//访问数据库，具体的SQL语句
//获取在厂设备点检信息
////////////////////////////////////

module.exports.queryIncheckEquipmentList = (queryStr, cb) => {
  const conn = databaseModules.getConnection();
  databaseModules.connect(conn);
  const sql = `select * from inspection_record where id = ${queryStr} `;
  conn.query(sql, (err, result) => {
    if (err) {
      cb(err);
    }
    cb(null, result);
  })
  conn.end();
}