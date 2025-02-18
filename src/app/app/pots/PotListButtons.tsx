"use client";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import WithdrawPot from "./WithdrawPot";
import { useState } from "react";
import AddtoPot from "./AddtoPot";
import { Pots } from "@/types/types";

type Props = {
    pot:Pots
}
function PotListButtons({pot}:Props) {
  const [openWithdrawal, setOpenWithdrawal] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    
  return (
    <CardFooter className="flex justify-center gap-7">
      <Dialog open={openAdd} onOpenChange={setOpenAdd}>
        <DialogTrigger asChild>
          <Button className="w-1/2 scale-105 transform bg-beige-100 capitalize text-grey-900 transition-all duration-300 ease-linear hover:bg-beige-500/30">
            add money
          </Button>
        </DialogTrigger>
        <AddtoPot pot={pot} setOpen={setOpenAdd} />
      </Dialog>
      <Dialog open={openWithdrawal} onOpenChange={setOpenWithdrawal}>
        <DialogTrigger asChild>
          <Button className="w-1/2 scale-105 transform bg-beige-100 capitalize text-grey-900 transition-all duration-300 ease-linear hover:bg-beige-500/30">
            withdraw
          </Button>
        </DialogTrigger>
        <WithdrawPot pot={pot} setOpen={setOpenWithdrawal} />
      </Dialog>
    </CardFooter>
  );
}

export default PotListButtons;
