//'use server'
import { verifyAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const result = await verifyAuth();
  if (!result.user){
    return redirect('/');
  }
  return (
    <>
    <div>page</div>
    
    </>
    
  )
}

export default page;