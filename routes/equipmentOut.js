const express = require("express");
const router = express.Router();
var equipmentOutServ = require('../services/equipmentOutService');
//分发请求，调用业务逻辑层的函数
router.get('/getEquipmentOutList',
  (req, res, next) => {
    const queryStr = req.query.queryStr;
    // console.log(queryStr);
    equipmentOutServ.getOutEquipmentList(queryStr || '', (error, result) => {
      if (error) {
        return res.sendResult(null, 500, error);
      } else if (result) {
        return res.sendResult(result, 200, '查询成功！');
      }
    })
  }
)

module.exports = router;