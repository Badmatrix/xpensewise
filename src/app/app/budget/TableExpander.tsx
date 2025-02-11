"use client";

import { TableBody } from "@/components/ui/table";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

function TableExpander({ children }: Props) {
  
  return <TableBody>{children}</TableBody>;
}

export default TableExpander;
