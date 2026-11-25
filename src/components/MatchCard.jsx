import { useState } from "react";
import { supabase } from "../supabase";

function MatchCard({
  id,
  team1,
  team2,
  date,
  venue,
  available_seats,
  onBookingSuccess,
}) {
  const [booked, setBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function bookTicket() {
    if (loading || booked) return;

    if (available_seats <= 0) {
      alert("Sorry, no seats available!");
      return;
    }

    const customer_name = prompt("Enter your name:");

    if (!customer_name || !customer_name.trim()) {
      return;
    }

    setLoading(true);

    // Update available seats in database
    const { data: updatedMatch, error: updateError } = await supabase
      .from("matches")
      .update({ available_seats: available_seats - 1 })
      .eq("id", id)
      .select();

    if (updateError || !updatedMatch || updatedMatch.length === 0) {
      alert("Seat update failed: " + (updateError?.message || "Match not found"));
      setLoading(false);
      return;
    }

    // Insert booking record
    const { error: bookingError } = await supabase
      .from("bookings")
      .insert({
        match_id: id,
        user_name: customer_name.trim(),
        match_title: `${team1} vs ${team2}`,
        tickets: 1,
        total_price: 0,
      });

    if (bookingError) {
      // Restore seats if booking insert fails
      await supabase
        .from("matches")
        .update({ available_seats: available_seats })
        .eq("id", id);

      alert("Booking failed: " + bookingError.message);
      setLoading(false);
      return;
    }

    // Booking successful
    setBooked(true);
    alert("Ticket booked successfully!");

    // Fetch the latest seat count in React
    if (onBookingSuccess) {
      await onBookingSuccess();
    }

    setLoading(false);
  }

  return (
    <div className="match-card">
      <h3>{team1} vs {team2}</h3>

      <p>Date: {date}</p>
      <p>Venue: {venue}</p>

      <p>
        Available Seats: {available_seats ?? "Loading..."}
      </p>

      <button onClick={bookTicket} disabled={loading || booked}>
        {loading
          ? "Booking..."
          : booked
          ? "Booked Successfully"
          : "Book Tickets"}
      </button>
    </div>
  );
}

export default MatchCard;