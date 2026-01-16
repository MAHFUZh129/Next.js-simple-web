

import { NextResponse } from "next/server";

export function proxy(request) {
  const isLoggedIn = request.cookies.get("auth")?.value === "true";

  const protectedRoutes = ["/add-job"];

  const pathname = request.nextUrl.pathname;

  if (protectedRoutes.includes(pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// কোন route এ middleware চলবে
export const config = {
  matcher: ["/add-job"],
};
