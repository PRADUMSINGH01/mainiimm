"use client";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { AiFillGoogleCircle } from "react-icons/ai"; // Google icon from react-icons

export default function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className=" flex flex-col items-center justify-center w-full h-screen">
        <h1>You are not signed in</h1>
        <button
          onClick={() => signIn("google")}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#4285F4",
            color: "white",
            cursor: "pointer",
          }}
        >
          <AiFillGoogleCircle
            style={{ marginRight: "10px", fontSize: "24px" }}
          />
          Login with Google
        </button>
      </div>
    );
  }

  return (
    <div>
      {() => {
        router.back();
      }}
    </div>
  );
}
