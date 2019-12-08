var express = require("express");
var path = require("path");
var router = express.Router();

// 로그인 페이지를 위한 코드
router.get("/", function(req, res, next) {
  if (!req.session.name) {
    res.redirect("/");
  } else {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  }
});

module.exports = router;
