const bookings = new Map();

let latestBookingId = 1;

const book = {
  bookingId: 1,
  vehicle: "coaster bus",
  tripDate: new Date("November 20, 2024"),
  destination: "Lagos",
  passenger: "Charlie",
  upcoming: true,
  success: true,
};

//mapping by booking Id
bookings.set(book.bookingId, book);

//retrieve all bookings from array of bookings
function getAllBookings() {
  return Array.from(bookings.values());
}

//add new booking to array
function addNewBooking(book) {
  latestBookingId++;
  bookings.set(
    latestBookingId,
    Object.assign(book, {
      success: true,
      upcoming: true,
      bookingId: latestBookingId,
    })
  );
}

module.exports = {
  getAllBookings,
  addNewBooking,
};
