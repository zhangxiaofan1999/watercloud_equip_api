var path = require('path');
var equipmentsCheckStandardDao = require(path.join(process.cwd(), 'dao/equipmentsCheckStandardDao'));

//业务逻辑层
module.exports.getCheckStandardEquipmentList = (queryStr, cb) => {
  // 调用数据访问层DAO层
  equipmentsCheckStandardDao.queryCheckStandardEquipmentList(queryStr, (error, result) => {
    cb(error, result);
  })
}
