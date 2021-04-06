const databaseModules = require('../modules/database');
///////////////////////////////////
//访问数据库，具体的SQL语句
//获取线上设备信息
////////////////////////////////////

module.exports.queryOnlineEquipmentList = (queryStr, cb) => {
  const conn = databaseModules.getConnection();
  databaseModules.connect(conn);
  const sql = `select * from on_line_equipment where equipment_code = ${queryStr} or equipment_name = ${queryStr} or equipment_version = ${queryStr} or equipment_type = ${queryStr} or caliber = ${queryStr}`;
  conn.query(sql, (err, result) => {
    if (err) {
      cb(err);
    }
    cb(null, result);
  })
  conn.end();
}