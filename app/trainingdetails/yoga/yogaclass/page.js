import './yogaTutorial.css';
import YogaPose from '@/components/yogapose/yogapose';
export default function YogaTutorial(){
    const yogaPoses = [
        {
          name: "Tadasana (Mountain Pose)",
          description: "A foundational standing pose that promotes balance and posture.",
          steps: [
            "Stand with your feet together and arms by your sides.",
            "Distribute your weight evenly across both feet.",
            "Engage your thighs and lift your kneecaps.",
            "Lift through the crown of your head, lengthening your spine.",
            "Relax your shoulders, keeping your arms at your sides.",
            "Hold for a few breaths, maintaining steady, calm breathing."
          ],
          img: "/yoga/modernyoga.jpeg",
        },
        {
          name: "Bhujangasana (Cobra Pose)",
          description: "A backbend that strengthens the spine and stretches the chest.",
          steps: [
            "Lie face down on the mat, legs extended behind you.",
            "Place your hands under your shoulders, elbows bent.",
            "Press into your palms and lift your chest off the mat, arching your back.",
            "Keep your elbows slightly bent and gaze slightly upward.",
            "Hold the pose for a few breaths, keeping your lower body relaxed."
          ],
          img: "/yoga/yogacobrapose.png",
        },
        {
          name: "Vrksasana (Tree Pose)",
          description: "A balancing pose that promotes focus and stability.",
          steps: [
            "Stand tall with your feet together.",
            "Shift your weight onto your left foot and lift your right foot to place it on your inner left thigh.",
            "Press your foot into your thigh and balance.",
            "Bring your palms together at your chest or reach them overhead.",
            "Hold for several breaths, then switch sides."
          ],
          img: "/yoga/yogaWithNature.jpeg",
        },
      ]
    return(
        <>
             <div className="app">
      <header className="app-header">
        <h1>Yoga Poses</h1>
        <p>Master the art of yoga with these step-by-step instructions for each pose.</p>
      </header>
      
      <section className="poses-section">
        <div className="poses-grid">
          {yogaPoses.map((pose, index) => (
            <YogaPose key={index} pose={pose} />
          ))}
        </div>
      </section>

      <footer className="app-footer">
        <p>&copy; 2024 Yoga Mastery | Breathe, Stretch, Grow</p>
      </footer>
    </div>
        </>
    );
}