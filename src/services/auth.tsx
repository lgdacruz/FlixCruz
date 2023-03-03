import { Alert } from "react-native";

import { UserTypes } from "../types";

const mockUser: UserTypes = {
  name: "Cruz",
  age: "28",
  from: "RJ",
};

export const SingIn = async (login: string, password: string) => {
  if (!login || !password) return Alert.alert("Credenciais inválidas");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login !== "cruz" || password !== "123")
        reject(new Error("Credenciais incorretas"));
      else resolve(mockUser);
    }, 1000);
  });
};
