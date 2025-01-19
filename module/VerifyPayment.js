"use server";

import crypto from "crypto";

export async function verificationPayment(payment_id, order_id, signature) {
  const razorpay_secret = process.env.RAZORPAY_KEY_SECRET;

  // Generate the expected signature
  const generated_signature = crypto
    .createHmac("sha256", razorpay_secret)
    .update(order_id + "|" + payment_id)
    .digest("hex");

  // Compare the generated signature with the received signature
  if (generated_signature === signature) {
    console.log(true);
    return { success: true, status: 200 }; // Verification successful
  } else {
    console.log(false);
    return { success: false, status: 400 }; // Verification failed
  }
}
