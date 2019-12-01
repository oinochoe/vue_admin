var express = require("express");
var path = require("path");
var router = express.Router();

// 리스트 페이지를 위한 코드
router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = router;
