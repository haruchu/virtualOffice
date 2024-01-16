"use client";
import { signIn } from "next-auth/react";
import { ButtonWrapper, Wrapper, LoginWrapper } from "./style";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

export const LoginContent = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <span>バーチャルオフィスへようこそ^^</span>
      <span>下のボタンからログインしてください</span>
      <ButtonWrapper>
        <LoginWrapper>
          <TextField
            id="outlined-basic"
            label="Office ID"
            variant="outlined"
            size="small"
          />
          <Button variant="contained" onClick={() => signIn()}>
            ログイン
          </Button>
        </LoginWrapper>
        <Button variant="outlined" onClick={() => router.push(`/create/`)}>
          新規作成
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
