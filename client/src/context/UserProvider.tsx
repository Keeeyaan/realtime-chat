import React, { createContext, useContext, useState } from 'react';

interface UserContextInterface {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextInterface>({ username: '', setUsername: () => {} });

const UserProvider = ({ children }: any) => {
  const [username, setUsername] = useState('');

  return <UserContext.Provider value={{ username, setUsername }}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
