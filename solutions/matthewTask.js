//starting to solve the task.
const totalSeats=24
let bookedSeats=15
const newBooking=9

//cheching with conditions
if(bookedSeats+newBooking>totalSeats){
    console.log("NOt enough seats avaialable")
}else if(bookedSeats+newBooking==totalSeats){
    console.log("All seats booked")
}else{
    console.log("Booking successful,seats available")
}