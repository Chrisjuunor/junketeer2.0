const express = require("express");

const {
  httpGetAllBookings,
  httpAddNewBooking,
  httpCancelBookingById,
} = require("./bookings.controller");

const bookingsRouter = express.Router();

bookingsRouter.get("/", httpGetAllBookings);
bookingsRouter.post("/add", httpAddNewBooking);
bookingsRouter.delete("/cancel/:id", httpCancelBookingById);

module.exports = { bookingsRouter };
