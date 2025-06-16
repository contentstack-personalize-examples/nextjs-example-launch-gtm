'use client';

import { useEffect } from 'react';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function PostAuthentication() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    async function runEffect() {
      if (status === 'authenticated') {
      } else {
        localStorage.removeItem('isSubscribed');
      }
    }

    runEffect();
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }, [status, session]);

  return (
    <div>
      Redirecting back to home page...
    </div>
  );
}

export default PostAuthentication;
