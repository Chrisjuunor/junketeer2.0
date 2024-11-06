const express = require("express");

const {
  httpGetAllBookings,
  httpAddNewBooking,
  httpCancelBookingById,
} = require("./bookings.controller");

const bookingsRouter = express.Router();

bookingsRouter.get("/", httpGetAllBookings);
bookingsRouter.post("/", httpAddNewBooking);
bookingsRouter.delete("/:id", httpCancelBookingById);

module.exports = { bookingsRouter };
