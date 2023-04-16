import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export function AuthContextProvider(props) {
  const [isLoggenIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogInInfo = localStorage.getItem("isLoggedIn");

    if (storedLogInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggenIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
