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
  let condition = !user || Object.keys(user).length <= 0;
  if (condition) {
    next();
    return res.render("index", {
      userStatus: false,
    });
  } else {
    res.render("index", { userStatus: true });
    next();
  }
});

App.listen(PORT, () => console.log(`running on the ${PORT}`));
