var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);

// login router
var loginRouter = require("./router/login");
// index router
var indexRouter = require("./router/index");

// mysql
var mysql = require("mysql");

// app
var app = express();

// dbconfig
var dbconfig = {
  host: "localhost",
  port: 3308,
  user: "root",
  password: "admin",
  database: "test"
};

// Connection 객체 생성
var connection = mysql.createConnection(dbconfig);

// Connect
connection.connect(function(err) {
  if (err) {
    console.error("mysql connection error");
    console.error(err);
    throw err;
  }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// express-session use
app.use(
  session({
    secret: "!@#$$@!$@#$!@#$!@#$!@#$%%^&",
    store: new MySQLStore(dbconfig),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
    }
  })
);

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

// loginCheck
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
        req.session.name = rows[0].id;
        req.session.save(function() {
          return res.redirect("/list");
        });
      } else {
        res.send(
          '<script type="text/javascript">alert("로그인 실패, 아이디와 패스워드를 다시 한번 확인해 주세요."); location.href="/"</script>'
        );
      }
    }
  );
});

// login
app.use("/", loginRouter);

// index
app.use("/list", indexRouter);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

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
