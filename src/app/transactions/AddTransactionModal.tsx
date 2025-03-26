import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddTransaction from "./AddTransaction";
import { User } from "@supabase/supabase-js";

type Props = { user: User; setOpen: (open: boolean) => void };

function AddTransactionModal({ user, setOpen }: Props) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="capitalize">Add new transaction</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          suscipit!
        </DialogDescription>
      </DialogHeader>
      <AddTransaction user={user} setOpen={setOpen} />
    </DialogContent>
  );
}

export default AddTransactionModal;
