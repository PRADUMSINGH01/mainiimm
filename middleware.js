// middleware.js or app/middleware.js

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export async function middleware(req) {
  // Get the JWT token from the request ()
  const token = await getToken({ req });
  if (!token && req.nextUrl.pathname === "/Membership") {
    return NextResponse.redirect(new URL("/signIn", req.url));
  }

  if (!token && req.nextUrl.pathname === "/Business-case-studies") {
    return NextResponse.redirect(new URL("/signIn", req.url));
  }

  if (token && req.nextUrl.pathname === "/signIn") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signIn", "/Membership", "/Business-case-studies", "/"],
};
