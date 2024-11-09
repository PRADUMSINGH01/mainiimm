// Server-side Firebase Admin
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK); // Your Firebase Admin SDK JSON as env var

if (!getAuth()) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export const adminAuth = getAuth();
