var path = require('path');
var equipmentsOnlineDao = require(path.join(process.cwd(), 'dao/equipmentsOnlineDao'));

//业务逻辑层
module.exports.getOnlineEquipmentList = (queryStr, cb) => {
  // 调用数据访问层DAO层
  equipmentsOnlineDao.queryOnlineEquipmentList(queryStr, (error, result) => {
    cb(error, result);
  })
}
