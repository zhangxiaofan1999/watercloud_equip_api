const databaseModules = require('../modules/database');
///////////////////////////////////
//访问数据库，具体的SQL语句
//获取设备故障信息
////////////////////////////////////

module.exports.queryFailureEquipmentList = (queryStr, cb) => {
  const conn = databaseModules.getConnection();
  databaseModules.connect(conn);
  const sql = `select * from equipment_failure where equipment_code = ${queryStr} or equipment_name = ${queryStr} or equipment_version = ${queryStr} or equipment_type = ${queryStr} or caliber = ${queryStr}`;
  conn.query(sql, (err, result) => {
    if (err) {
      cb(err);
    }
    cb(null, result);
  })
  conn.end();
}