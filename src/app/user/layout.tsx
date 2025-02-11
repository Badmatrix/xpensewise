import Image from "next/image";
import { ReactNode } from "react";
import formImage from "../../../public/form-image.png";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen max-h-screen px-5 py-5 overflow-y-hidden">
      <div className="grid items-center gap-4 xl:gap-10 lg:grid-cols-3">
        <div className="relative col-span-1 hidden h-[90vh] w-[90%] items-center justify-between overflow-hidden rounded-md lg:flex">
          <Image src={formImage} alt="form image" className="h-full" />
          <div className="absolute bottom-5 left-0 right-0 mx-auto w-4/5 space-y-3 text-white">
            <h1 className="text-xl font-semibold">
              Keep track of your money and save for your future
            </h1>
            <p className="text-xs tracking-tight">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
        <section className="col-span-2 flex w-full justify-center py-6 px-3 xl:p-10 ">
          {children}
        </section>
      </div>
    </div>
  );
}

export default layout;
