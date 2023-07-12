const express = require("express");
const cors = require("cors");

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Prasanna");
});

app.listen(3001, () => {
  console.log("server running on 3001");
});
