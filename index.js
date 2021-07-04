const express = require("express");

const App = express();
const PORT = process.env.PORT || 80;

App.listen(PORT, () => console.log(`running on the ${PORT}`));
