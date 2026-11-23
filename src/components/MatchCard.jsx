import { useState } from "react";

function MatchCard({ team1, team2, date, venue }) {
  const [booked, setBooked] = useState(false);

  return (
    <div className="match-card">
      <h3>{team1} vs {team2}</h3>
      <p>Date: {date}</p>
      <p>Venue: {venue}</p>

      <button onClick={() => setBooked(!booked)}>
        {booked ? "Booking Selected" : "Book Tickets"}
      </button>
    </div>
  );
}

export default MatchCard;