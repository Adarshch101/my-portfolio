import React, { createContext, useContext, useMemo } from "react";
import { profileData } from "../data/profile";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const value = useMemo(() => ({ profile: profileData }), []);
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

export const useProfile = () => useContext(ProfileContext);
