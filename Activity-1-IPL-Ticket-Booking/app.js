
// ========================================
// ACTIVITY 5: TOAST NOTIFICATION
// ========================================

function showToast(message) {

    let toast = document.createElement("div");

    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(function() {
        toast.remove();
    }, 3000);

}


// ========================================
// ACTIVITY 5: BOOKING PAGE NAVIGATION
// ========================================

// Select all Book Ticket links
let bookButtons = document.querySelectorAll(".booking-link");

// Add click event to each Book Ticket link
bookButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        // Display toast message
        showToast("Opening booking page!");

        // Open booking.html after 1 second
        setTimeout(function() {

            window.location.href = button.href;

        }, 1000);

    });

});


// ========================================
// ACTIVITY 7: BOOKING SUMMARY
// ========================================

// Select booking form using querySelector
const bookingForm = document.querySelector("#bookingForm");

// Select form controls using getElementById
const match = document.getElementById("match");
const stand = document.getElementById("stand");
const quantity = document.getElementById("quantity");

// Check whether booking form exists
if (bookingForm && match && stand && quantity) {

    // Ticket prices for each match and stand
    const ticketPrices = {

        "RCB vs MI": {
            General: 800,
            Premium: 1500,
            VIP: 3000
        },

        "CSK vs KKR": {
            General: 700,
            Premium: 1400,
            VIP: 2800
        },

        "MI vs SRH": {
            General: 900,
            Premium: 1800,
            VIP: 3500
        },

        "KKR vs RCB": {
            General: 750,
            Premium: 1500,
            VIP: 3000
        }

    };


    // Function to update Booking Summary
    function updateSummary() {

        let selectedMatch = match.value;
        let selectedStand = stand.value;
        let tickets = Number(quantity.value);

        let price = 0;

        // Get ticket price
        if (
            selectedMatch !== "" &&
            selectedStand !== "" &&
            ticketPrices[selectedMatch]
        ) {

            price = ticketPrices[selectedMatch][selectedStand] || 0;

        }

        // Calculate total price
        let total = price * tickets;

        // Update Booking Summary
        document.getElementById("summaryMatch").innerText =
            selectedMatch || "Not Selected";

        document.getElementById("summaryStand").innerText =
            selectedStand || "Not Selected";

        document.getElementById("summaryPrice").innerText =
            price;

        document.getElementById("summaryQuantity").innerText =
            tickets || 0;

        document.getElementById("summaryTotal").innerText =
            total;

        // Show confirmation toast
        showToast("Booking summary updated successfully!");

    }


    // Add change event listeners
    match.addEventListener("change", updateSummary);

    stand.addEventListener("change", updateSummary);

    quantity.addEventListener("change", updateSummary);

    quantity.addEventListener("input", updateSummary);


    // Reset summary when form is reset
    bookingForm.addEventListener("reset", function() {

        setTimeout(function() {

            document.getElementById("summaryMatch").innerText =
                "Not Selected";

            document.getElementById("summaryStand").innerText =
                "Not Selected";

            document.getElementById("summaryPrice").innerText = 0;

            document.getElementById("summaryQuantity").innerText = 0;

            document.getElementById("summaryTotal").innerText = 0;

        }, 0);

    });


    // Handle form submission
    bookingForm.addEventListener("submit", function(event) {

        // Prevent page reload
        event.preventDefault();

        showToast("Your booking details are valid!");

    });

}
