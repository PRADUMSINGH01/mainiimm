// /app/api/auth/logout/route.js

import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function GET() {
  // Expire the session cookie
  const cookie = serialize('session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(0), // Expire immediately
    path: '/',
  });

  const response = NextResponse.json({ message: 'Logged out' });
  response.headers.set('Set-Cookie', cookie);
  return response;
}
