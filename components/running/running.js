import './runnings.css'
function RunningWorkout({ workout }) {
    return (
      <div className="workout-card">
        {/* <img src={workout.img} alt={workout.name} className="workout-img" /> */}
        <h3>{workout.name}</h3>
        <p>{workout.description}</p>
        <h4>Steps:</h4>
        <ol className="steps-list">
          {workout.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }
  
  export default RunningWorkout;