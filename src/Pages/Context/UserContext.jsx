import { createContext, useEffect, useState } from "react";


export const userContext = createContext({
  isAuthenticated: false,
  userData: null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    userData: null,
    
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};