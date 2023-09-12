/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="flex justify-between items-center px-4 font-semibold py-2 shadow-sm shadow-black bg-zinc-900 text-neutral-300 text-2xl">
      <Link href="/">
        <h1 className="text-amber-300">NextGoogle</h1>
      </Link>
      {session?.user ? (
        <div className="flex gap-2 items-center">
          <Link
            href="/dashboard"
            className="hover:text-amber-300 trasition-all ease-in-out duration-200"
          >
            Dashboard
          </Link>
          <div className="flex gap-1 items-center">
            <p className="text-amber-300">{session.user.name}</p>
            <img className="w-10 h-10 rounded-full" src={session.user.image} alt="userImage" />
          </div>
          <button onClick={() => {
            signOut()
          }} className="py-1 px-3 bg-amber-400 text-zinc-950 rounded-md">
            LogOut
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className="py-1 px-3 bg-amber-400 text-zinc-950 rounded-md"
        >
          Login
        </button>
      )}
    </nav>
  );
}
