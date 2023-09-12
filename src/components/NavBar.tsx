"use client"

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center px-4 font-bold py-2 shadow-sm shadow-black bg-zinc-900 text-neutral-300 text-2xl">
      <Link href='/'>
        <h1 className="text-amber-300">NextGoogle</h1>
      </Link>
      <div className="flex gap-2 items-center">
        <Link href="/dashboard" className="hover:text-amber-300 trasition-all ease-in-out duration-200">Dashboard</Link>
        <button onClick={() => signIn()} className="py-1 px-3 bg-amber-400 text-zinc-950 rounded-md">Sigin</button>
      </div>
    </nav>
  );
}
