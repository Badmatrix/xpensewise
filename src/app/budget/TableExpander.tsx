"use client";

import { TableBody } from "@/components/ui/table";

type Props = {
  children: React.ReactNode;
};

function TableExpander({ children }: Props) {
  
  return <TableBody>{children}</TableBody>;
}

export default TableExpander;
