var express = require("express");
var path = require("path");
var router = express.Router();

// 리스트 페이지를 위한 코드
router.get("/", function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// 상세 페이지를 위한 코드
router.get("/:id", function(req, res, next) {
  if (req.session.name) {
    // var id = parseInt(req.params.id, 10);
    // var movie = movies.filter(function(movie) {
    //   return movie.id === id;
    // });
    // res.send(movie);
  }
});

module.exports = router;
