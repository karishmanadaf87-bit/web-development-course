import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";
import "./App.css";

function App() {
  const matches = [
    {
      id: 1,
      team1: "RCB",
      team2: "MI",
      date: "25 March 2026",
      venue: "Bengaluru",
    },
    {
      id: 2,
      team1: "CSK",
      team2: "KKR",
      date: "26 March 2026",
      venue: "Chennai",
    },
    {
      id: 3,
      team1: "SRH",
      team2: "RR",
      date: "27 March 2026",
      venue: "Hyderabad",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <h2 className="section-title">Upcoming Matches</h2>

      <div className="match-container">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            date={match.date}
            venue={match.venue}
          />
        ))}
      </div>
    </>
  );
}

export default App;