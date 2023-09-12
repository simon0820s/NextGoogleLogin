import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between px-4 font-bold py-2 shadow-sm shadow-black bg-zinc-900 text-neutral-300 text-2xl">
      <Link href='/'>
        <h1 className="text-amber-300">NextGoogle</h1>
      </Link>
      <div>
        <Link href="/dashboard" className="hover:text-amber-300 trasition-all ease-in-out duration-200">Dashboard</Link>
        <button>Sigin</button>
      </div>
    </nav>
  );
}
