var path = require("path");
var equipmentsOnlineDao = require(path.join(
  process.cwd(),
  "dao/equipmentsOnlineDao"
));
var dayjs = require('dayjs');


//业务逻辑层
module.exports.getOnlineEquipmentList = (queryStr, cb) => {
  // 调用数据访问层DAO层
  console.log(queryStr);
  if (queryStr) {
    var sql = `select * from on_line_equipment where equipment_code = '${queryStr}' or equipment_name = '${queryStr}' or equipment_version = '${queryStr}' or equipment_type = '${queryStr}' or caliber = '${queryStr}'`;
  } else {
    var sql = 'select * from on_line_equipment';
  }
  equipmentsOnlineDao.queryOnlineEquipmentList(sql, (error, result) => {
    if (result && result.length > 0) {
      for (const i in result) {
        result[i].manufacture_date = dayjs(result[i].manufacture_date).format('YYYY-MM-DD');
        result[i].ex_works_date = dayjs(result[i].ex_works_date).format('YYYY-MM-DD');
        result[i].uptime = dayjs(result[i].uptime).format('YYYY-MM-DD');
      }
    }
    cb(error, result);
  });
};
