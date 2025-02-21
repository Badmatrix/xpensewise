"use client"
import Link from "next/link";

export default function Error({ error }:any) {
  console.log(error.message)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-100 p-6 text-center">
      <h1 className="text-6xl font-bold text-red-800">Error</h1>
      <p className="mt-4 text-xl text-red-600">
        Something went wrong. Please try again later.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
      >
        Go Home
      </Link>
    </div>
  );
}
