document.addEventListener('DOMContentLoaded', function() {
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove 'selected' class from all cards
            movieCards.forEach(c => c.classList.remove('selected'));

            // Add 'selected' class to the clicked card
            this.classList.add('selected');
        });
    });
})

function login() {
    // Get the value of the email input
    var emailInput = document.getElementById('emailInput').value;

    // Check if the email matches the specific address
    if (emailInput === "spaneer927@gmail.com") {
        // Redirect to the desired URL with the email appended
        window.location.href = `https://www.netflix.com/signup/password?locale=en-IN=${encodeURIComponent(emailInput)}`;
    } else {
        alert("Invalid email address");
    }
}

 // JavaScript to toggle answer visibility
 document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faq = button.parentElement;
        faq.classList.toggle('active');
    });
});
