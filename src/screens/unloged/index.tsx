import { useState } from "react";

import { AuthUse } from "../../contexts/auth";
import { ThemeUse } from "../../contexts/theme";
import { ViewCenter, TextCenter, Input, ButtonCenter } from "../../style";

export default function UnlogedScreen() {
  const colors = ThemeUse();
  const { LogIn } = AuthUse();

  const [formLogin, setFormLogin] = useState({ login: "", password: "" });

  return (
    <ViewCenter mg="auto">
      <Input
        placeholder="Usuário"
        autoCapitalize="none"
        placeholderTextColor={colors.dark}
        value={formLogin.login}
        onChangeText={(text: string) =>
          setFormLogin({ ...formLogin, login: text })
        }
      />
      <Input
        placeholder="Senha"
        autoCapitalize="none"
        secureTextEntry
        placeholderTextColor={colors.dark}
        value={formLogin.password}
        onChangeText={(text: string) =>
          setFormLogin({ ...formLogin, password: text })
        }
      />

      <ButtonCenter
        onPress={() => LogIn(formLogin.login, formLogin.password)}
        bg={colors.light}
        pd="5px"
        wd="130px"
        mg="20px"
      >
        <TextCenter color={colors.dark} bold>
          Entrar
        </TextCenter>
      </ButtonCenter>
    </ViewCenter>
  );
}
