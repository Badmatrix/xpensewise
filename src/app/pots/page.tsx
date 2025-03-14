import PotsHeader from "./PotsHeader";
import PotsData from "./PotsData";
import { getCurrUser } from "@/lib/Actions";
import { redirect } from "next/navigation";

async function page() {
  const { user } = await getCurrUser();
    if (!user) redirect("/login");

  return (
    <div>
      <PotsHeader user={user} />
      <PotsData />
    </div>
  );
}

export default page;
