"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const NextAuthProvider = ({
  session,
  children,
}: {
  session: any;
  children: ReactNode;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
