var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
// movie router
var moviesRouter = require("./routes/movies");

// mysql
var mysql = require("mysql");

// Connection 객체 생성
var connection = mysql.createConnection({
  host: "localhost",
  port: 3308,
  user: "root",
  password: "admin",
  database: "test"
});

// Connect
connection.connect(function(err) {
  if (err) {
    console.error("mysql connection error");
    console.error(err);
    throw err;
  }
});

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// insert
app.post("/regist", function(req, res) {
  var user = {
    userid: req.body.userid,
    name: req.body.name,
    address: req.body.address
  };
  connection.query("insert into users set ?", user, function(err, result) {
    if (err) {
      console.error(err);
      throw err;
    }
    res.status(200).send("success");
  });
});

// select
app.post("/loginCheck", function(req, res, next) {
  var id = req.body["id"];
  var pw = req.body["pw"];
  connection.query(
    "select * from test_user where id=? and pw=?",
    [id, pw],
    function(err, rows, fields) {
      if (err) {
        console.error(err);
        throw err;
      }
      if (rows[0] != undefined) {
        res.send("id : " + rows[0]["id"] + "<br>" + "pw : " + rows[0]["pw"]);
      } else {
        res.send("no data");
      }
    }
  );
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// movie
app.use("/api/movies", moviesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
