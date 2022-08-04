import React, { useState, createContext } from "react";
 
export const UserDetail = createContext();
UserDetail.displayName = "UserContext>>>";

export const UserProvider = ( props ) => {
  const [islogin, setIslogin] = useState(false);
  const [userName, setUserName] = useState("Nadish");
  const [userId, setUserId] = useState(1);
  const [themeMode, setThemeMode] = useState("light");
  const [userAvatar, setUserAvatar] = useState("http://localhost:3001/images/avatar/nadish.jpg");
  const [followerCounter, setFollowerCounter]= useState(0);
  const [historyCounter, setHistoryCounter]= useState(0);
return(
  <UserDetail.Provider
   value={{
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
    followerCounter:followerCounter,
    setFollowerCounter:setFollowerCounter,
    historyCounter:historyCounter,
    setHistoryCounter:setHistoryCounter
   }}>

     {props.children}
   </UserDetail.Provider>





)}




 