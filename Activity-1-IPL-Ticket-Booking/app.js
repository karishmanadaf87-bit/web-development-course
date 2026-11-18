
/* ========================================
   ACTIVITY 5: TOAST NOTIFICATION
======================================== */

function showToast(message) {

    let toast = document.createElement("div");

    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);

}


/* ========================================
   ACTIVITY 5: BOOKING PAGE NAVIGATION
======================================== */

let bookButtons = document.querySelectorAll(".booking-link");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        showToast("Opening booking page!");

        setTimeout(function () {

            window.location.href = button.href;

        }, 1000);

    });

});


/* ========================================
   ACTIVITY 8: MOBILE HAMBURGER MENU
======================================== */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerText = isOpen ? "✕" : "☰";

    });

    // Close menu after selecting a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerText = "☰";

        });

    });

}


/* ========================================
   ACTIVITY 8: GRID / LIST VIEW
======================================== */

const matchGrid = document.getElementById("matchGrid");

const gridView = document.getElementById("gridView");

const listView = document.getElementById("listView");

if (matchGrid && gridView && listView) {

    gridView.addEventListener("click", function () {

        matchGrid.classList.remove("list-view");

        gridView.classList.add("active-view");

        listView.classList.remove("active-view");

    });

    listView.addEventListener("click", function () {

        matchGrid.classList.add("list-view");

        listView.classList.add("active-view");

        gridView.classList.remove("active-view");

    });

}


/* ========================================
   ACTIVITY 7: BOOKING SUMMARY
======================================== */

const bookingForm = document.querySelector("#bookingForm");

const match = document.getElementById("match");

const stand = document.getElementById("stand");

const quantity = document.getElementById("quantity");

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

        showToast("Booking summary updated successfully!");

    }


    // Add change event listeners
    match.addEventListener("change", updateSummary);

    stand.addEventListener("change", updateSummary);

    quantity.addEventListener("change", updateSummary);

    quantity.addEventListener("input", updateSummary);


    // Reset summary when form is reset
    bookingForm.addEventListener("reset", function () {

        setTimeout(function () {

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
    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        showToast("Your booking details are valid!");

    });

}
