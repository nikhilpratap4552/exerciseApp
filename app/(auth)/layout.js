//'use server'
import Footer from '@/components/footer';
import '../globals.css';
import { logout } from '@/actions/auth-actions';
import { verifyAuth } from '@/lib/auth';
import { getUserById } from '@/lib/user';
import Link from 'next/link';
import Header from '@/components/header';
import { redirect } from 'next/navigation';



export const metadata = {
  title: 'Training app',
  description: 'Next.js Authentication',
};

export default async function AuthRootLayout({ children }) {
  const result = await verifyAuth();
  if (!result.user){
    return redirect('/');
  }
  //console.log(result);
  const id = result.user.id;
  
  const email = getUserById(id);
  //console.log(email);

  return (
    
    <>
    <Header />
        <header id='auth-header'>
          <p>welcome back {email.username}!</p>

          
          {/* <form action={logout}>
            {/* <button>Logout</button> 
          </form> */}
        </header>
        
        {children}
        <Footer/>
    </>
  );
}
