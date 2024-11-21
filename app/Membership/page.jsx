  "use client"
import { useState } from 'react';
import RazorpayPayment from '@/components/chat/PaymentUI';
const Checkout = () => {

  // Step 1: Create Razorpay Order
  const createOrder = async () => {
    const response = await fetch('https://us-central1-iimb-f94a0.cloudfunctions.net/createOrder');
    const data = await response.json();

    if (response.ok) {
      launchRazorpay(data.orderId);  // Step 2: Launch Razorpay
    } else {
      console.error('Order creation failed:', data.error);
    }
  };

  // Step 2: Launch Razorpay Checkout
  const launchRazorpay = (orderId) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,  // Your Razorpay Key ID from .env
      amount: 50000,  // Amount in paisa (500 INR = 50000 paisa)
      currency: "INR",
      name: "Your Company",
      description: "Test Transaction",
      image: "/your-logo.png",  // Optional
      order_id: orderId,
      handler: async function (response) {
        // Step 3: Verify Payment after successful payment
        const verificationResponse = await fetch('https://us-central1-iimb-f94a0.cloudfunctions.net/verifyPayment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          }),
        });

        const verificationData = await verificationResponse.json();
        if (verificationResponse.ok) {
          alert('Payment Verified!');
        } else {
          alert('Payment Verification Failed!');
        }
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <RazorpayPayment PaymentHandle={createOrder}/>
    </div>
  );
};

export default Checkout;
