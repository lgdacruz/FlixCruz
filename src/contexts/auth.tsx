import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

import { SingIn } from "../services/auth";
import { AuthTypes, UserTypes } from "../types";

export const AuthContext = createContext<AuthTypes>({} as AuthTypes);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UserTypes>();
  const [globalLoading, setGlobalLoading] = useState(false);

  const LogIn = async (login: string, password: string) => {
    setGlobalLoading(true);
    try {
      const res: UserTypes = await SingIn(login, password);
      if (res) {
        await AsyncStorage.setItem("@user", JSON.stringify(res));
        setUser(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const AuthVerify = async () => {
    setGlobalLoading(true);
    try {
      const userStorage = await AsyncStorage.getItem("@user");
      if (userStorage) setUser(JSON.parse(userStorage));
    } catch (error) {
      console.log(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const LogOut = async () => {
    setGlobalLoading(true);
    try {
      await AsyncStorage.removeItem("@user");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
    setGlobalLoading(false);
  };

  useEffect(() => {
    AuthVerify();
  }, []);

  return (
    <AuthContext.Provider value={{ user, globalLoading, LogIn, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthUse = () => useContext(AuthContext);
