
// ========================================
// TEAM FILTER
// ========================================

// Select Team Filter
const teamFilter = document.getElementById("teamFilter");

// Select all match table rows
const rows = document.querySelectorAll("#matchTable tr");

// Check whether Team Filter exists
if (teamFilter) {

    // Add change event listener
    teamFilter.addEventListener("change", function() {

        let team = teamFilter.value;

        // Check every match row
        for (let i = 0; i < rows.length; i++) {

            let match = rows[i].cells[1].textContent;

            // Display matching teams
            if (team === "All" || match.includes(team)) {

                rows[i].style.display = "";

            } else {

                rows[i].style.display = "none";

            }

        }

    });

}
