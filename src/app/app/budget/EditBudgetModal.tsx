// modal for adding and editing budget
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import EditBudgetForm from "./EditBudgetForm";
import { Budgets } from "@/types/types";

type Props = {
  budget: Budgets;
  setOpen: (open: boolean) => void;
};
function EditBudgetModal({ budget, setOpen }: Props) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold capitalize">
          Edit budget
        </DialogTitle>

        <DialogDescription>
          As your budgets change, feel free to update your spending limits.
        </DialogDescription>
      </DialogHeader>

      <EditBudgetForm budget={budget} setOpen={setOpen} />
    </DialogContent>
  );
}

export default EditBudgetModal;
