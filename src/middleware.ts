import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("Query Params:", req.nextUrl.searchParams);
  return NextResponse.next();
}
