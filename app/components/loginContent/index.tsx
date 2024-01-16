"use client";
import { signIn } from "next-auth/react";
import { ButtonWrapper, Wrapper, LoginWrapper } from "./style";
import { Button, TextField } from "@mui/material";

export const LoginContent = () => (
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
      <Button variant="outlined">新規作成</Button>
    </ButtonWrapper>
  </Wrapper>
);
