var path = require('path');
var equipmentsOutDao = require(path.join(process.cwd(), 'dao/equipmentsOutDao'));
const dayjs = require('dayjs');

//业务逻辑层
module.exports.getOutEquipmentList = (queryStr, cb) => {
  // 调用数据访问层DAO层
  equipmentsOutDao.queryOutEquipmentList(queryStr, (error, result) => {
    if (result && result.length > 0) {
      for (const i in result) {
        result[i].manufacture_date = dayjs(result[i].manufacture_date).format('YYYY-MM-DD');
        result[i].ex_works_date = dayjs(result[i].ex_works_date).format('YYYY-MM-DD');
      }
    }
    cb(error, result);
  })
}
