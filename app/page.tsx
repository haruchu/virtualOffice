import { redirect } from "next/navigation";
import { LoginButton } from "./components/loginButton";
import { authOptions } from "./lib/auth";
import { getServerSession } from "next-auth";

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
      <LoginButton session={session} />
    </main>
  );
};

export default App;
