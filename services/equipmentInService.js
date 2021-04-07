var path = require('path');
var equipmentsInDao = require(path.join(process.cwd(), 'dao/equipmentsInDao'));
const dayjs = require('dayjs');

//业务逻辑层
module.exports.getInEquipmentList = (queryStr, cb) => {
  // 调用数据访问层DAO层
  equipmentsInDao.queryInEquipmentList(queryStr, (error, result) => {
    if (result && result.length > 0) {
      for (const i in result) {
        result[i].manufacture_date = dayjs(result[i].manufacture_date).format('YYYY-MM-DD');
        result[i].inspection_date = dayjs(result[i].inspection_date).format('YYYY-MM-DD');
      }
    }
    cb(error, result);
  })
}
