
/* ========================================
   ACTIVITY 7 & 8: TEAM FILTER
======================================== */

const teamFilter = document.getElementById("teamFilter");

const matchCards = document.querySelectorAll(".match-card");

const noMatches = document.getElementById("noMatches");

if (teamFilter) {

    teamFilter.addEventListener("change", function () {

        const selectedTeam = teamFilter.value;

        let visibleMatches = 0;

        matchCards.forEach(function (card) {

            const teams = card.dataset.teams.split(" ");

            if (
                selectedTeam === "All" ||
                teams.includes(selectedTeam)
            ) {

                card.hidden = false;
                visibleMatches++;

            } else {

                card.hidden = true;

            }

        });

        if (noMatches) {
            noMatches.hidden = visibleMatches !== 0;
        }

    });

}
