import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EditpotForm from "./EditpotForm";
import { Pots } from "@/types/types";
import AddNewPotForm from "./AddNewPotForm";

type Props = {
  pot?: Pots;
  setOpen: (open: boolean) => void;
};
function EditAddPotModal({ pot, setOpen }: Props) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold capitalize">
          {pot?.id ? "Edit Pot" : "add new pot"}
        </DialogTitle>

        <DialogDescription>
          {pot?.id
            ? "If your saving targets change, feel free to update your pots."
            : "Create a pot to set savings targets. These can help keep you on track as you save for special purchases."}
        </DialogDescription>
      </DialogHeader>

      {pot?.id ? (
        <EditpotForm pot={pot} setOpen={setOpen} />
      ) : (
        <AddNewPotForm setOpen={setOpen} />
      )}
    </DialogContent>
  );
}

export default EditAddPotModal;
