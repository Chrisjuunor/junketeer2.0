const { getAllBookings, addNewBooking } = require("../models/bookings.model");

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
  return res.status(201).json(launch);
}

module.exports = {
  httpGetAllBookings,
  httpAddNewBooking,
};
