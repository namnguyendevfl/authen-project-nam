const express = require("express");
const cors = require("cors");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const accountRouter = require("./accounts/accounts.router");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", accountRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;