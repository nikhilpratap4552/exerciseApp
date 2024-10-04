import AuthForm from '@/components/auth-form';
import db from "./db";

export default async function Home({searchParams}) {
  const formMode = searchParams.mode || 'login';
  return <AuthForm mode = {formMode}/>;
}
