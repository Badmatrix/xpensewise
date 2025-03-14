import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddNewBudget from "./AddNewBudget";
import { User } from "@supabase/supabase-js";
type Props = {
  setOpen: (open: boolean) => void;
  user: User;
};
function AddBudgetModal({ setOpen, user }: Props) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold capitalize">
          Add new budget
        </DialogTitle>

        <DialogDescription>
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </DialogDescription>
      </DialogHeader>

      <AddNewBudget setOpen={setOpen} user={user} />
    </DialogContent>
  );
}

export default AddBudgetModal;
