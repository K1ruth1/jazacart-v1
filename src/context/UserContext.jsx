// UserContext.js
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return React.useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to handle user login
  const loginUser = (userData) => {
    // Perform authentication logic here and set the user state accordingly
    setUser(userData);
  };

  // Function to handle user logout
  const logoutUser = () => {
    // Perform logout logic here and set the user state to null
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
