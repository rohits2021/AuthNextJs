import { getSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState,useEffect } from 'react';

function Blog({data}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  useEffect(()=>{
    const securePage = async () => {
      const session = await getSession();
      if(!session){
        router.push('/')
      } else {
        setLoading(true);
      }
    }
    securePage();
  })
  return (
    <div>blog</div>
  )
}

// export async function (){
//   return {
//     props: {
//       data: 'any Data'
//     }
//   }
// }

export default Blog