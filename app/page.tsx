import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]";
import { LoginButton } from "./components/loginButton";

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
