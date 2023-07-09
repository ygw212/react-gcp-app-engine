import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);
const SetUserContext = createContext(null);

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <UserContext.Provider value={currentUser}>
      <SetUserContext.Provider value={setCurrentUser}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export function useSetUser() {
  return useContext(SetUserContext);
}
