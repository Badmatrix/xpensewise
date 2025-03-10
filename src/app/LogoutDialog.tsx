import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { logoutUser } from "@/lib/Actions";
import { ReactNode, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
function LogoutDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleLogOut() {
    setLoading(true);
    await logoutUser();
    setLoading(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-600">
          You will be logged out of your account.
        </p>
        <DialogFooter className="gap-y-3">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleLogOut}>
            {loading ? <LoadingSpinner /> : "Logout"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LogoutDialog;
