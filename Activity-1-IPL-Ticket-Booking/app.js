
function showToast(message) {

    let toast = document.createElement("div");

    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(function() {
        toast.remove();
    }, 3000);
}

// Select all Book buttons
let bookButtons = document.querySelectorAll('a[href="#booking"]');

// Add click event to each Book button
bookButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        // Find the booking form section
        let bookingSection = document.getElementById("booking");

        // Smoothly scroll to booking section
        bookingSection.scrollIntoView({
            behavior: "smooth"
        });

        // Display confirmation message
        showToast("Booking form opened successfully!");

    });

});
