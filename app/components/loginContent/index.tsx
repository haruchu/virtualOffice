"use client";
import { signIn } from "next-auth/react";
import { Wrapper } from "./style";
import { Button } from "@mui/material";

export const LoginContent = () => {
  return (
    <Wrapper>
      <span>バーチャルオフィスへようこそ^^</span>
      <span>下のボタンからログインしてください</span>
      <Button variant="contained" onClick={() => signIn()}>
        ログイン
      </Button>
    </Wrapper>
  );
};
