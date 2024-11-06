const {
  getAllBookings,
  addNewBooking,
  bookingExistsWithId,
  cancelBookingById,
} = require("../models/bookings.model");

function httpGetAllBookings(req, res) {
  return res.status(200).json(getAllBookings());
}

function httpAddNewBooking(req, res) {
  const book = req.body;

  if (!book.vehicle || !book.destination || !book.tripDate) {
    return res.status(400).json({
      error: "Missing booking requirements!",
    });
  }

  book.tripDate = new Date(book.tripDate);
  if (isNaN(book.tripDate)) {
    res.status(400).json({
      error: "invalid date!",
    });
  }

  addNewBooking(book);
  return res.status(201).json(book);
}

function httpCancelBookingById(req, res) {
  const bookingId = +req.params.id;

  //check for the booking
  if (!bookingExistsWithId(bookingId)) {
    return res.status(404).json({
      error: "Booking not found!",
    });
  }

  const cancelled = cancelBookingById(bookingId);
  return res.status(200).json(cancelled);
}

module.exports = {
  httpGetAllBookings,
  httpAddNewBooking,
  httpCancelBookingById,
};
