"use client";

import RazorpayPayment from "@/components/chat/PaymentUI";
import { RazorPayOrderCreate } from "@/module/RazorPay";
import { verificationPayment } from "@/module/VerifyPayment";

const Checkout = () => {
  // Step 1: Create Razorpay Order
  const createOrder = async () => {
    try {
      const data = await RazorPayOrderCreate();
      console.log(data);

      if (data.staus === 200) {
        launchRazorpay(data.order.id); // Step 2: Launch Razorpay
      } else {
        console.error("Order creation failed:", data.error);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  // Step 2: Launch Razorpay Checkout
  const launchRazorpay = (orderId) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Client-side accessible key
      amount: 50000, // Amount in paisa (500 INR = 50000 paisa)
      currency: "INR",
      name: "IIM TARGET",
      description: "Payment",
      image: "/your-logo.png", // Optional
      order_id: orderId,
      handler: async function (response) {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;

        // Step 3: Verify Payment after successful payment
        try {
          const verificationResponse = await verificationPayment(
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature
          );
          console.log(verificationResponse);
          if (verificationResponse.status === 200) {
            alert("Payment Verified!");
          } else {
            alert("Payment Verification Failed!");
          }
        } catch (error) {
          console.error("Payment verification failed:", error);
        }
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
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
      <RazorpayPayment PaymentHandle={createOrder} />
    </div>
  );
};

export default Checkout;
