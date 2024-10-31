const express = require("express");

const { bookingsRouter } = require("./routes/bookings.router");

const app = express();

app.use(express.json());

app.use("/bookings", bookingsRouter);

module.exports = app;
