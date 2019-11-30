var express = require("express");
var router = express.Router();
var movies = require("../movies.json");
router.get("/", function(req, res, next) {
  res.send(movies);
});
// 영화 상세 페이지를 위한 코드
router.get("/:id", function(req, res, next) {
  var id = parseInt(req.params.id, 10);
  var movie = movies.filter(function(movie) {
    return movie.id === id;
  });
  res.send(movie);
});
module.exports = router;
