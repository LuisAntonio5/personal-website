import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex text-center flex-row justify-around">
        <Link
          href="/"
          className="px-5 py-4"
        >
          <h2 className={`mb-3 text-2xl font-semibold relative underline-animation`}>
            Home
          </h2>
        </Link>
        <Link
          href="/about"
          className="px-5 py-4"
        >
          <h2 className={`mb-3 text-2xl font-semibold relative underline-animation`}>
            About            
          </h2>
        </Link>
        <Link
          href="/about"
          className="px-5 py-4"
        >
          <h2 className={`mb-3 text-2xl font-semibold relative underline-animation`}>
            Projects            
          </h2>
        </Link>
      </div>
    </main>
  );
}
