"use client";
import { redirect } from "next/navigation";
import { LoginContent } from "./components/loginContent";
import { SessionProvider, useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();

  if (session) {
    redirect("/home");
  } else {
    redirect("/login");
  }

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoginContent />
    </main>
  );
};

export default Page;
