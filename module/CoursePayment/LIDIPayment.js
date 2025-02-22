"use server";

import Razorpay from "razorpay";

export async function RazorPayOrderCreateLIDI() {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Your Razorpay key ID
    key_secret: process.env.RAZORPAY_KEY_SECRET, // Your Razorpay key secret
  });

  const options = {
    amount: 2999 * 100, // Amount in paise (100 paise = 1 INR)
    currency: "INR",
    receipt: "receipt#1", // A unique receipt identifier
  };

  try {
    const order = await razorpay.orders.create(options);
    return { staus: 200, msg: "order create", order };
  } catch (error) {
    return { staus: 400, msg: "order Not  create" };
  }
}
