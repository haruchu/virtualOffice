"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import MdiGithub from "./icons/MdiGithub";
import { ButtonWrapper, StyledButton } from "./style";
import RiGoogleFill from "./icons/RiGoogleFill";

export const LoginButton = ({ session }: { session: Session | null }) => {
  return (
    <>
      {
        // セッションがある場合、ログアウトを表示
        session && <button onClick={() => signOut()}>ログアウト</button>
      }
      {
        // セッションがない場合、ログインを表示
        // ログインボタンを押すと、ログインページに遷移する
        !session && (
          <ButtonWrapper>
            <StyledButton
              onClick={() => signIn("google", {}, { prompt: "login" })}
            >
              <RiGoogleFill />
              <span>Googleでログイン</span>
            </StyledButton>
            <StyledButton
              onClick={() => signIn("github", {}, { prompt: "login" })}
            >
              <MdiGithub />
              <span>Githubでログイン</span>
            </StyledButton>
          </ButtonWrapper>
        )
      }
    </>
  );
};
