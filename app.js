const express = require('express')
// const bodyParser = require('body-parser ')
const router = require("../crud/router/router")
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use("/", router);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

var url = "mongodb://localhost:27017/crud";

mongoose.connect(url, {
  useUnifiedTopology: true,
});

const conn = mongoose.connection;
conn.on("open", () => {
  console.log("connection open");
});

app.listen(3000);
