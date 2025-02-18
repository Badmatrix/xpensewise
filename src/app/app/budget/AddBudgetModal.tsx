import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddNewBudget from "./AddNewBudget";

function AddBudgetModal({ setOpen }: any) {
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

      <AddNewBudget setOpen={setOpen} />
    </DialogContent>
  );
}

export default AddBudgetModal;
