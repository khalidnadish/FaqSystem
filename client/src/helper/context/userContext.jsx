import React, { useState, createContext } from "react";

export const UserDetail = createContext();
UserDetail.displayName = "UserContext>>>";

export const UserProvider = ({ children }) => {
  const [islogin, setIslogin] = useState(false);
  const [userName, setUserName] = useState("Nadish");
  const [userId, setUserId] = useState(1);
  const [themeMode, setThemeMode] = useState("light");
  const [userAvatar, setUserAvatar] = useState(
    "http://localhost:3001/images/avatar/nadish.jpg"
  );

  const value = {
    userName: userName,
    setUserName: setUserName,
    userAvatar: userAvatar,
    userId: userId,
    setUserId: setUserId,
    themeMode: themeMode,
    setThemeMode: setThemeMode,
    setUserAvatar: setUserAvatar,
    islogin: islogin,
    setIslogin: setIslogin,
  };

  return <UserDetail.Provider value={value}> {children}</UserDetail.Provider>;
};
