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
  const { user } = req.cookies;
  if (!user) {
    res.cookie("user", "");
    next();
  }
  next();
});

App.get("/", (req, res) => {
  res.render("index", { userStatus: false });
});

App.listen(PORT, () => console.log(`running on the ${PORT}`));
