const totalSeats=30
let bookedSeats=20
const newBookings=10
//hello
if(bookedSeats+newBookings>totalSeats){
    console.log("Not enough seat available")
}else if(bookedSeats+newBookings==totalSeats){
    console.log("All Seats Booked")
}else{
    console.log("Booking Successful, Seats Available")
}
    
