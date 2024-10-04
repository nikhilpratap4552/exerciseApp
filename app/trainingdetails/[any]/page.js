import { boxing, cycling, gaming, sailing, weightlifting } from "@/lib/workouts";
import RunningWorkout from "@/components/running/running";
import './page.css';

export default function Any({params}){
  const boxings = boxing;
  const sailings = sailing;
  const weightliftings =weightlifting;
  const cyclings = cycling;
  const gamings = gaming;
  const data = params.any;
  let worksouts;

  switch (data) {
    case "cycling":
      worksouts = cyclings;
      break;
  
    case "sailing":
     worksouts = sailings;
     break;

    case "boxing":
      worksouts = boxings;
      break; 

    case "weightlifting":
      worksouts = weightliftings;
      break;  

      case "gaming":
        worksouts = gamings;
        break;  

        default:
          break;
  }
  


  
    return(
        <>
        <div className="app">
      <header className="app-header">
        <h1>{params.any} Workouts</h1>
        <p>Boost your fitness and endurance with these step-by-step running workouts.</p>
      </header>

      <section className="workouts-section">
        <div className="workouts-grid">
          {worksouts.map((workout, index) => (
            <RunningWorkout key={index} workout={workout} />
          ))}
        </div>
      </section>
    
      </div>
        </>
    );
}