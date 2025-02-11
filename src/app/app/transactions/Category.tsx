import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Category() {
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Label className="text-xs capitalize md:text-base">category:</Label>

      <Select>
        <SelectTrigger className="lg:w-[100px] ">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Category;
