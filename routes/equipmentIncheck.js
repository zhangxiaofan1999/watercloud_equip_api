const express = require("express");
const router = express.Router();
var equipmentIncheckServ  = require('../services/equipmentIncheckService');
//分发请求，调用业务逻辑层的函数
router.get('/getEquipmentIncheckList',
  (req, res, next) => {
    const queryStr = req.query.queryStr;
    // console.log(queryStr);
    equipmentIncheckServ.getIncheckEquipmentList(queryStr || '', (error, result) => {
      if (error) {
        return res.sendResult(null, 500, error);
      }
      return res.sendResult(result, 200, '查询成功！');
    })
  }
)

module.exports = router;