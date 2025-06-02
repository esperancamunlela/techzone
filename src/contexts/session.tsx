import { createContext, useContext, useState } from "react";

interface SessionContextProps {
  isUserAuthenticated: boolean;
  toggleAuthentication: () => void;
}

const SessionContext = createContext<SessionContextProps>({
  isUserAuthenticated: false,
  toggleAuthentication: () => {},
});

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  function toggleAuthentication() {
    setIsUserAuthenticated(!isUserAuthenticated);
  }

  return (
    <SessionContext.Provider
      value={{ isUserAuthenticated, toggleAuthentication }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const session = useContext(SessionContext);
  return session;
};
