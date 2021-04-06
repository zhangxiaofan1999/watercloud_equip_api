var path = require('path');
var equipmentsIncheckDao = require(path.join(process.cwd(), 'dao/equipmentsIncheckDao'));

//业务逻辑层
module.exports.getIncheckEquipmentList = (queryStr, cb) => {
  // 调用数据访问层DAO层
  equipmentsIncheckDao.queryIncheckEquipmentList(queryStr, (error, result) => {
    cb(error, result);
  })
}
