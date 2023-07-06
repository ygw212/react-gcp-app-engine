import { createContext, useContext, useState } from "react";

const TokenContext = createContext("");
const SetTokenContext = createContext(null);

export function TokenProvider({ children }) {
  const [token, setToken] = useState("");
  return (
    <TokenContext.Provider value={token}>
      <SetTokenContext.Provider value={setToken}>
        {children}
      </SetTokenContext.Provider>
    </TokenContext.Provider>
  );
}

export function useToken(){
    return useContext(TokenContext);
}

export function useSetToken(){
    return useContext(SetTokenContext);
}
