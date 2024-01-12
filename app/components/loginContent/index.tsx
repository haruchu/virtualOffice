"use client";
import { signIn } from "next-auth/react";
import { StyledButton, Wrapper } from "./style";

export const LoginContent = () => {
  return (
    <Wrapper>
      <span>バーチャルオフィスへようこそ^^</span>
      <span>下のボタンからログインしてください</span>
      <StyledButton onClick={() => signIn()}>
        <span>ログイン</span>
      </StyledButton>
    </Wrapper>
  );
};
