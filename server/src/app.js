const express = require("express");
const cors = require("cors");

const accountRouter = require("./accounts/accounts.router");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", accountRouter);

module.exports = app;