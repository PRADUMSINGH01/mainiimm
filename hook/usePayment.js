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
        setData("Please Login");
        setTimeout(() => {
          router.push("/signIn");
        }, 2000);
        return;
      }

      try {
        const response = await PaymentChecker(session.user.email);
        if (!response) {
          setData("Please Login");
          setTimeout(() => {
            router.push("/signIn");
          }, 2000);
          return;
        }

        const result = await response;

        if (result) {
          return;
        } else {
          setData("Please Buy Membership");
          setTimeout(() => {
            router.push("/Membership");
          }, 2000);
        }
      } catch (err) {
        setError("An error occurred while checking payment.");
      } finally {
        setLoading(false);
      }
    };

    checkPayment();
  }, [session, router]);

  return { dataa, loading, error };
};

export default usePayment;
