"use client";
import PaymentChecker from "@/module/PaymentCheck/paymentChecker";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const usePayment = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [dataa, setData] = useState("Checking payment status...");

  useEffect(() => {
    const checkPayment = async () => {
      if (!session) {
        handleRedirect("Please Login", "/signIn");
        return;
      }

      try {
        const response = await PaymentChecker(session.user.email);
        if (!response) {
          handleRedirect("Please Buy Membership", "/Membership");
        }
      } catch (err) {
        setError("An error occurred while checking payment.");
      } finally {
        setLoading(false);
      }
    };

    const handleRedirect = (message, path) => {
      setData(message);
      setTimeout(() => {
        router.push(path);
      }, 2000);
    };

    checkPayment();
  }, [session, router]);

  return { dataa, loading, error };
};

export default usePayment;
