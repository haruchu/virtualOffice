"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { LoginButton } from "../components/loginButton";
import { redirect } from "next/navigation";
import { Wrapper } from "./style";

const Login = () => {
  const { data: session, status } = useSession();
  if (session) redirect("/home");
  if (status === "loading") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <span>Loading...</span>
      </div>
    );
  }
  return (
    <Wrapper>
      <LoginButton session={session} />
    </Wrapper>
  );
};

export default Login;
