const express = require("express");

const {
  httpGetAllBookings,
  httpAddNewBooking,
} = require("./bookings.controller");

const bookingsRouter = express.Router();

bookingsRouter.get("/", httpGetAllBookings);
bookingsRouter.post("/", httpAddNewBooking);

module.exports = { bookingsRouter };
