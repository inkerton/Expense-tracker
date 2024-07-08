"use client"
// import { Button } from '@/components/ui/button.jsx'
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


function Header() {

  const {user, isSignedIn}=useUser();
  return (
    <div className='p-5 flex justify-between items-center shadow-sm' >
        <Image src={'./logo.svg'}
        alt='logo'
        width={160}
        height={100}
        /> 
        {isSignedIn?
        <UserButton /> : <Link href={'/sign-in'}>
        <button>get started</button>
        </Link>
      }
        {/* <Button>Get started</Button> */}
        
        
    </div>
  )
}

export default Header