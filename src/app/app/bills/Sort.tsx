import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Sort() {
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Label className="w-full text-xs capitalize md:text-base lg:w-fit">
        sort by:
      </Label>
      <Select>
        <SelectTrigger className="lg:w-[100px]">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent className="text-sm md:text-base">
          <SelectItem value="light">Latest</SelectItem>
          <SelectItem value="dark">oldest</SelectItem>
          <SelectItem value="system">A to Z</SelectItem>
          <SelectItem value="system"> Z to A</SelectItem>
          <SelectItem value="system">Highest</SelectItem>
          <SelectItem value="system">Lowest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Sort;
