//'use server'
import { userdata } from '@/actions/auth-actions';
import { verifyAuth } from '@/lib/auth';
import { getTrainings } from '@/lib/training';
import { getUserByEmail, getUserById } from '@/lib/user';
import Link from 'next/link';
import { redirect } from 'next/navigation';



export default async function TrainingPage() {
  const result = await verifyAuth();
  
  //console.log(result);
  const id = result.user.id;
  
  
  // its use for user details console.log(email);


 // const user = getUserByEmail();

  if (!result.user){
    return redirect('/');
  }
  const user = getUserById(id);
  const trainingSessions = getTrainings();

  return (
    <main>
      <h1>Find your favorite activity</h1>
      {/* <h1>{result.user.id}</h1>
      <h1>{result.session.id}</h1> */}
      
      <ul id="training-sessions">
        {trainingSessions.map((training) => (
          <li key={training.id}>
            <img src={`/trainings/${training.image}`} alt={training.title} />
            <div>
              <h2><Link href={`/trainingdetails/${training.slug}`}>{training.title} </Link></h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
