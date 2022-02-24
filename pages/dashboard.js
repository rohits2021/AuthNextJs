import { getSession, useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'
// import Link from 'next/link';

function Dashboard({data}) {
  return (
    <div>{data } {' '}dashboard</div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  if(!session){
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/dashboard',
        permanent: false
      },
    }
  }
  return {
    props:{
      data: session ? 'authenticated data': 'unauthenticated'
    }
  }
}

export default Dashboard;
