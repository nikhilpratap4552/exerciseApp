import RunningWorkout from "@/components/running/running";
import './running.css';

const runningWorkouts = [
  {
    name: "Warm-Up Run",
    description: "A light jog to prepare your muscles and increase heart rate before a more intense workout.",
    steps: [
      "Start with a slow pace, maintaining a comfortable speed.",
      "Keep your body relaxed and focus on rhythmic breathing.",
      "Continue jogging for 5-10 minutes to raise your heart rate.",
      "Gradually increase the intensity towards the end of the warm-up."
    ],
    img: "https://example.com/warmup-run.jpg",
  },
  {
    name: "Interval Training",
    description: "Alternate between periods of intense running and slower recovery to build endurance and speed.",
    steps: [
      "Begin with a 5-minute warm-up jog.",
      "Run at a fast pace for 1 minute.",
      "Slow down to a jog or walk for 2 minutes.",
      "Repeat the cycle for 20-30 minutes.",
      "End with a 5-minute cool-down jog."
    ],
    img: "https://example.com/interval-training.jpg",
  },
  {
    name: "Long Distance Run",
    description: "A steady, moderate-pace run aimed at improving cardiovascular endurance.",
    steps: [
      "Start at a comfortable, steady pace.",
      "Maintain a consistent speed throughout the run.",
      "Focus on even breathing and form to conserve energy.",
      "Continue for 45 minutes to 1 hour."
    ],
    img: "https://example.com/long-distance-run.jpg",
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Running Workouts</h1>
        <p>Boost your fitness and endurance with these step-by-step running workouts.</p>
      </header>
      
      <section className="workouts-section">
        <div className="workouts-grid">
          {runningWorkouts.map((workout, index) => (
            <RunningWorkout key={index} workout={workout} />
          ))}
        </div>
      </section>

      <footer className="app-footer">
        <p>&copy; 2024 Running Workouts | Chase Your Goals</p>
      </footer>
    </div>
  );
}

export default App;