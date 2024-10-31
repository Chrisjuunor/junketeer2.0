const express = require("express");

const {httpGetAllBookings} = require("./bookings.controller");

const bookingsRouter = express.Router();

bookingsRouter.get("/", httpGetAllBookings);

module.exports = { bookingsRouter, }