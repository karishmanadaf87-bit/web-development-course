import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";
import { supabase } from "./supabase";
import "./App.css";

function App() {
  const [matches, setMatches] = useState([]);

  const fetchMatches = useCallback(async () => {
    const { data, error } = await supabase
      .from("matches")
      .select("*");

    if (error) {
      console.error("Fetch error:", error.message);
      return;
    }

    console.log("Matches fetched:", data);
    setMatches(data || []);
  }, []);

  useEffect(() => {
    // Fetch matches when page loads
    fetchMatches();

    // Realtime subscription for database changes
    const channel = supabase
      .channel("matches-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "matches",
        },
        (payload) => {
          console.log("Realtime update:", payload);
          fetchMatches();
        }
      )
      .subscribe();

    // Cleanup subscription
    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchMatches]);

  return (
    <>
      <Navbar />
      <Hero />

      <h2 className="section-title">Upcoming Matches</h2>

      <div className="match-container">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            id={match.id}
            team1={match.team1}
            team2={match.team2}
            date={match.match_date || match.date}
            venue={match.venue}
            available_seats={match.available_seats}
            onBookingSuccess={fetchMatches}
          />
        ))}
      </div>
    </>
  );
}

export default App;