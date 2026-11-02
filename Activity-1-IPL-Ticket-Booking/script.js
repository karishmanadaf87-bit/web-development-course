
// Team Filter

const teamFilter = document.getElementById("teamFilter");

const rows = document.querySelectorAll("#matchTable tr");

teamFilter.addEventListener("change", function() {

    let team = teamFilter.value;

    for (let i = 0; i < rows.length; i++) {

        let match = rows[i].cells[1].textContent;

        if (team === "All" || match.includes(team)) {
            rows[i].style.display = "";
        }
        else {
            rows[i].style.display = "none";
        }

    }

});


// Booking Summary

const match = document.getElementById("match");
const stand = document.getElementById("stand");
const quantity = document.getElementById("quantity");

function updateSummary() {

    let selectedMatch = match.value;
    let selectedStand = stand.value;
    let tickets = Number(quantity.value);

    let price = 0;

    if (selectedMatch === "RCB vs MI") {

        if (selectedStand === "General") price = 800;
        else if (selectedStand === "Premium") price = 1500;
        else if (selectedStand === "VIP") price = 3000;

    }

    else if (selectedMatch === "CSK vs KKR") {

        if (selectedStand === "General") price = 700;
        else if (selectedStand === "Premium") price = 1400;
        else if (selectedStand === "VIP") price = 2800;

    }

    else if (selectedMatch === "MI vs SRH") {

        if (selectedStand === "General") price = 900;
        else if (selectedStand === "Premium") price = 1800;
        else if (selectedStand === "VIP") price = 3500;

    }

    else if (selectedMatch === "KKR vs RCB") {

        if (selectedStand === "General") price = 750;
        else if (selectedStand === "Premium") price = 1500;
        else if (selectedStand === "VIP") price = 3000;

    }

    let total = price * tickets;

    document.getElementById("summaryMatch").textContent =
        selectedMatch || "Not Selected";

    document.getElementById("summaryStand").textContent =
        selectedStand || "Not Selected";

    document.getElementById("summaryPrice").textContent = price;

    document.getElementById("summaryQuantity").textContent = tickets || 0;

    document.getElementById("summaryTotal").textContent = total;

}


// Update summary when user changes values

match.addEventListener("change", updateSummary);

stand.addEventListener("change", updateSummary);

quantity.addEventListener("input", updateSummary);
