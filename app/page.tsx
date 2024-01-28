import { redirect } from "next/navigation";
import { LoginContent } from "./components/loginContent";
import { authOptions } from "./lib/auth";
import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";

export const App = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home");
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SessionProvider session={session}>
        <LoginContent />
      </SessionProvider>
    </main>
  );
};

export default App;
