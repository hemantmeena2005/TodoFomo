"use client";
import { useState } from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Importing a menu icon from React Icons

export default function Header() {
  const { user } = useUser();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="bg-white shadow-md w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link href={'/'}>
          <p className="text-3xl font-bold text-blue-400">Todo<span className="text-black">Fomo</span></p>
        </Link>
        <div className="hidden md:flex text-xl gap-4 items-center">
          <Link href={'/add'}>Add task</Link>
          <Link href={'/view'}>My tasks</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contact us</Link>
          <SignedOut>
            <div className="text-xl text-blue-600"><SignInButton /></div>
          </SignedOut>
          <SignedIn>
            <div className="text-xl flex items-center gap-2">
              <p>Hello, <span className="text-blue-500">{user?.firstName}</span></p>
              <UserButton />
            </div>
          </SignedIn>
        </div>
        <div className="md:hidden">
          <FaBars className="h-8 w-8 text-gray-800" onClick={toggleDrawer} />
        </div>
      </div>
      {isDrawerOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute top-16 left-0 right-0">
          <Link href={'/add'} onClick={toggleDrawer} className="block py-2">Add task</Link>
          <Link href={'/view'} onClick={toggleDrawer} className="block py-2">My tasks</Link>
          <Link href={'/about'} onClick={toggleDrawer} className="block py-2">About</Link>
          <Link href={'/contact'} onClick={toggleDrawer} className="block py-2">Contact us</Link>
          <SignedOut>
            <div className="text-xl text-blue-600 py-2" onClick={toggleDrawer}><SignInButton /></div>
          </SignedOut>
          <SignedIn>
            <div className="text-xl flex items-center gap-2 py-2">
              <p>Hello, <span className="text-blue-500">{user?.firstName}</span></p>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      )}
    </header>
  );
}
