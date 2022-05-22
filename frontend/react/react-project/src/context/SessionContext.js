import axios from "axios";
import { createContext, useEffect, useState } from "react"
import { API_URL } from "../api/config";

export const SessionContext = createContext({
  // TODO: answer here
  user: {},
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
})

export const SessionProvider = ({ children }) => {
  // TODO: answer here
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SessionContext.Provider value={{
      user,
      setUser,
      isLoggedIn,
      setIsLoggedIn
    }}>
      {children}
    </SessionContext.Provider>
  )
}
