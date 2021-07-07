const express = require("express");
const path = require("path");

const App = express();
const PORT = process.env.PORT || 8000;

App.set("view engine", "ejs");
App.use(express.static(path.join(__dirname + "/public")));

App.get("/", (req, res) => {
  res.render("index", {
    userStatus: true,
  });
});

App.listen(PORT, () => console.log(`running on the ${PORT}`));
