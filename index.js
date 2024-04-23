const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
const router = require("./router");

app.use("/", router);
console.log("xfcfrghjk");

app.listen(8080);
