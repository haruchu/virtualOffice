import type { Metadata } from "next";
import { NextAuthProvider } from "./components/atoms/Provider";

export const metadata: Metadata = {
  title: "Virtual Office",
  description: "Virtual Office",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
        }}
      >
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
