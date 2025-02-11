import React from "react";
import PotList from "./PotList";
import EmptyPots from "./EmptyPots";
import { getPots } from "@/service/apiUser";

async function PotsData() {
  const pots = await getPots();

  if (!pots) return <EmptyPots />;
  return (
    <section className="my-5 md:my-7">
      <ul className="grid gap-7 md:grid-cols-2">
        {pots.map((pot) => (
          <PotList key={pot.id} pot={pot} />
        ))}
      </ul>
    </section>
  );
}

export default PotsData;
