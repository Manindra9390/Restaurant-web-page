document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservation-form');
    
    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        
        const reservationDetails = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            date: event.target.date.value,
            time: event.target.time.value,
            guests: event.target.guests.value
        };
        
        console.log('Reservation Details:', reservationDetails);
        
        // TODO: Send the reservation details to your server using fetch or XMLHttpRequest
        
        alert('Your reservation has been submitted!');
        reservationForm.reset();
    });
});
