"use client";
import { signIn } from "next-auth/react";
import { ButtonWrapper, Wrapper, LoginWrapper } from "./style";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginContent = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [isError, setIsError] = useState(false);

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
            error={isError}
            helperText="入室したいオフィスのIDを入力してください"
            onChange={(e) => {
              setIsError(false);
              setId(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              if (id === "") {
                setIsError(true);
              } else {
                localStorage.setItem("officeId", id);
                signIn();
              }
            }}
          >
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
