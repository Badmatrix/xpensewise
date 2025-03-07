"use client";
import { Button } from "@/components/ui/button";
type Props = { error: Error };
export default function Error({ error }: Props) {
  console.log(error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-beige-100 p-6 text-center">
      <h1 className="text-6xl font-bold text-red-800">Error</h1>
      <p className="mt-4 text-xl text-red-600 text-center">
        Something went wrong. <br />{" "}
        <span className="capitalize">{error.message}</span>
      </p>

      <Button
        onClick={() => window.location.reload()}
        className="mt-6 rounded-lg bg-red-600 px-6 py-3 text-white hover:bg-red-700"
      >
        Reload
      </Button>
    </div>
  );
}
