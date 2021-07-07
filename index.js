const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const App = express();
const PORT = process.env.PORT || 8000;

App.set("view engine", "ejs");
App.use(express.static(path.join(__dirname + "/public")));
App.use(express.json({ limit: "25mb" }));
App.use(express.urlencoded({ extended: true }));
App.use(cookieParser());

App.use("/", (req, res, next) => {
  const cookies = req.cookies;
  next();
});

App.get("/", (req, res) => {
  console.log(req.cookies);
  res.render("index", {
    userStatus: true,
  });
});

App.listen(PORT, () => console.log(`running on the ${PORT}`));
