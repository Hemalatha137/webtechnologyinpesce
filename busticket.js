document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const seat = document.getElementById('seat').value;

    const bookingDetails = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date of Journey:</strong> ${date}</p>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>To:</strong> ${to}</p>
        <p><strong>Number of Seats:</strong> ${seat}</p>
    `;

    document.getElementById('details').innerHTML = bookingDetails;

    alert('Booking successful!');
});
   