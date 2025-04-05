// Task: Booking System Check

const totalSeats = 25

let bookedSeats = 15

const newBooking = 3 

if(bookedSeats + newBooking > totalSeats) {
    console.log('Booking exceeds available seats.')
}else if(bookedSeats + newBooking == totalSeats){
    console.log('All seats are booked.')
}else{
    bookedSeats += newBooking
    console.log(`Seats booked: ${bookedSeats}`)
}