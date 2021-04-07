const express = require("express");
const router = express.Router();
var equipmentOnlineServ = require("../services/equipmentOnlineService");
//分发请求，调用业务逻辑层的函数
router.get("/getEquipmentOnlineList", (req, res, next) => {
  const queryStr = req.query.queryStr;
  equipmentOnlineServ.getOnlineEquipmentList(
    queryStr? queryStr : "",
    (error, result) => {
      if (error) {
        return res.sendResult(null, 500, error);
      } else if (result) {
        return res.sendResult(result, 200, "查询成功！");
      }
    }
  );
});

module.exports = router;
