
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const destination = document.getElementById('destination').value;
        const travelDate = document.getElementById('travelDate').value;

        confirmationMessage.innerHTML = `
            <p>Thank you, ${name}, for booking your space travel!</p>
            <p>We have sent a confirmation to ${email}.</p>
            <p>Destination: ${destination.charAt(0).toUpperCase() + destination.slice(1)}</p>
            <p>Travel Date: ${new Date(travelDate).toDateString()}</p>
        `;

        bookingForm.reset();
    });
});
 