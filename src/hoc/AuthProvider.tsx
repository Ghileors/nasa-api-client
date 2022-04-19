import React, { FC, createContext, useState } from 'react';
import { IChildren } from 'models/IChildren';

export interface AuthContextInterface {
  user: string | null;
  signIn: any;
  signOut: any;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

const AuthProvider: FC<IChildren> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const signIn = (newUser: string, cb: any) => {
    setUser(newUser);
    cb();
  };

  const signOut = (cb: any) => {
    setUser(null);
    cb();
  };

  const contextValue = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
