import './yogapose.css';
export default function YogaPose({ pose }) {
    return (
      <div className="pose-card">
        <img src={pose.img} alt={pose.name} className="pose-img" />
        <h3>{pose.name}</h3>
        <p>{pose.description}</p>
        <h4>Steps:</h4>
        <ol className="steps-list">
          {pose.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }