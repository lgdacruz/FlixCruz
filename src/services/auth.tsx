import { Alert } from "react-native";

import { UserTypes } from "../types";

const mockUser: UserTypes = {
  name: "Cruz",
  age: "28",
  from: "RJ",
};

export const SingIn = async (login: string, password: string) => {
  if (!login || !password)
    return Alert.alert("Credenciais", "Usuário: cruz e Senha: 123");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login !== "cruz" || password !== "123") {
        reject(new Error("Credenciais inválidas"));
        return Alert.alert("Credenciais", "Usuário: cruz e Senha: 123");
      } else resolve(mockUser);
    }, 1000);
  });
};
