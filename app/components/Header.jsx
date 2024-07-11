"use client";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';

export default function Header() {
  const { user } = useUser();

  return (
    <div className="flex justify-between p-4 text-4xl">
      <p>Todo Fomo</p>
      <SignedOut>
        <div className="text-xl text-blue-600"><SignInButton /></div>
      </SignedOut>
      <SignedIn>
        <div className="text-xl text-blue-500 flex items-center gap-2">
          <p>Hello {user?.firstName}</p>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}