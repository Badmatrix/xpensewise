import React from "react";
import PotList from "./PotList";
import EmptyPots from "./EmptyPots";
import { getPots } from "@/service/apiUser";
import { getCurrUser } from "@/lib/Actions";

async function PotsData() {
  const { user } = await getCurrUser();
  const pots = await getPots(user.id);
  // console.log(pots)

  if (!pots.length) return <EmptyPots />;
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
