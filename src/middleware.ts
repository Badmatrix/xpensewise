import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSupabaseServer } from "./service/supabase/supabaseServer";

// This function can be marked `async` if using `await` inside
const protectedRoutes: string[] = [
  "/dashboard",
  "/transactions",
  "/bills",
  "/pots",
  "/budget",
];


export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const token = request.cookies.get(
    "sb-hpmgrpfwhibkitaggshy-auth-token",
  )?.value;
  const supabase = await getSupabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const isAuthenticated = !!session;

  if (nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  if (protectedRoutes.includes(nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (!isAuthenticated && protectedRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isAuthenticated && nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/transactions",
    "/bills",
    "/pots",
    "/budget",
    "/login",
    "/signup",
  ],
};
