const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document .getElementById('count')
const total = document.getElementById('total')
const ticketSelect = document.getElementById('price')

let ticketPrice = +ticketSelect.value


// update total and count
 function updateSelectedCount(){
     const selectedSeats = document.querySelectorAll('.row .seat.selected')
     
     const seatsIndex = [...selectedSeats].map(seat =>[...seats].indexOf(seat))
    
     localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
    
     const selectedSeatsCount = selectedSeats.length
     
     count.innerText = selectedSeatsCount
     total.innerText = selectedSeatsCount * ticketPrice
 }

 // Ticket select event
 ticketSelect.addEventListener('change' , e=>{
     ticketPrice = +e.target.value
     
     updateSelectedCount()
 })

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
    }
    updateSelectedCount();
})
