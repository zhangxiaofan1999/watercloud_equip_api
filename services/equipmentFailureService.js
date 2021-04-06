var path = require('path');
var equipmentsFailureDao = require(path.join(process.cwd(), 'dao/equipmentsFailureDao'));

//业务逻辑层
module.exports.getFailureEquipmentList = (queryStr, cb) => {
  // 调用数据访问层DAO层
  equipmentsFailureDao.queryFailureEquipmentList(queryStr, (error, result) => {
    cb(error, result);
  })
}
