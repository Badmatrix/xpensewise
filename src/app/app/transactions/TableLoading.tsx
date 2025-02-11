import { Skeleton } from "@/components/ui/skeleton";
import {Table, TableBody, TableRow, TableCell } from "@/components/ui/table";


function TableLoading() {
  return (
    <Table className="w-full">
      <TableBody className="">
        {Array.from({ length: 4 }).map((_, i) => (
          <TableRow key={i} className="flex items-center gap-4">
            <TableCell>
              <Skeleton className="h-8 w-8 rounded-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[250px]" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableLoading;
