var path = require('path');
var equipmentsOutDao = require(path.join(process.cwd(), 'dao/equipmentsOutDao'));

//业务逻辑层
module.exports.getOutEquipmentList = (queryStr, cb) => {
  // 调用数据访问层DAO层
  equipmentsOutDao.queryOutEquipmentList(queryStr, (error, result) => {
    cb(error, result);
  })
}
