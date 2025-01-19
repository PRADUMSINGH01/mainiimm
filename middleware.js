// middleware.js or app/middleware.js

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Get the JWT token from the request (NextAuth automatically reads the cookie)
  const token = await getToken({ req });

  // If there is a valid token, redirect authenticated users from the sign-in page
  if (token && req.nextUrl.pathname === "/signIn") {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect to home
  }

  return NextResponse.next(); // Proceed with the request
}

export const config = {
  matcher: ["/signIn"], // Match the sign-in page
};
