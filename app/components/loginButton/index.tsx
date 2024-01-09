"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

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
        !session && <button onClick={() => signIn()}>ログイン</button>
      }
    </>
  );
};
