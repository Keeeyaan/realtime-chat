import React, { createContext, useContext, useState } from 'react';

interface UserContextInterface {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  showNicknameModal: boolean;
  setShowNicknameModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextInterface>({
  username: '',
  setUsername: () => {},
  showNicknameModal: true,
  setShowNicknameModal: () => {},
});

const UserProvider = ({ children }: any) => {
  const [username, setUsername] = useState('');
  const [showNicknameModal, setShowNicknameModal] = useState(true);

  return (
    <UserContext.Provider
      value={{ username, setUsername, showNicknameModal, setShowNicknameModal }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
