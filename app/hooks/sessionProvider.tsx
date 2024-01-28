import { Session } from "next-auth";
import { createContext, useContext, ReactNode } from "react";

interface SessionState {
  session: Session | null;
}

const sessionContext = createContext<SessionState>({
  session: null,
});

export const SessionProvider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session;
}) => {
  return (
    <sessionContext.Provider value={{ session }}>
      {children}
    </sessionContext.Provider>
  );
};

export const useSessionValue = () => useContext(sessionContext).session;
