"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface userProviderProps {
  children: React.ReactNode;
}
const UserProvider = ({ children }: userProviderProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
