const { getAllBookings } = require("../models/bookings.model");

function httpGetAllBookings(req, res) {
  return res.status(200).json(getAllBookings());
}

module.exports = {
  httpGetAllBookings,
};
