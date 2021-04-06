var path = require('path');
var equipmentsInDao = require(path.join(process.cwd(), 'dao/equipmentsInDao'));

//业务逻辑层
module.exports.getInEquipmentList = (queryStr, cb) => {
  // 调用数据访问层DAO层
  equipmentsInDao.queryInEquipmentList(queryStr, (error, result) => {
    cb(error, result);
  })
}
