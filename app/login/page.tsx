"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { LoginContent } from "../components/loginContent";
import { redirect } from "next/navigation";
import { Wrapper } from "./style";
import { CircularProgress } from "@mui/material";

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
        <CircularProgress />
      </div>
    );
  }
  return (
    <Wrapper>
      <LoginContent />
    </Wrapper>
  );
};

export default Login;
