import { Controller, useForm } from "react-hook-form";

import ErrorMessage from "./ErrorMessage";
import { AuthUse } from "../../contexts/auth";
import { ThemeUse } from "../../contexts/theme";
import { ViewCenter, TextCenter, Input, ButtonCenter } from "../../style";
import { CredentialsValues } from "../../types";

export default function UnlogedScreen() {
  const colors = ThemeUse();
  const { LogIn } = AuthUse();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsValues>();

  const onSubmit = (data: { user: string; password: string }) =>
    LogIn(data.user.toLowerCase(), data.password.toLowerCase());

  return (
    <ViewCenter mg="auto">
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Usuário"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="user"
      />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Senha"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            textContentType="password"
            secureTextEntry
          />
        )}
        name="password"
      />
      <ErrorMessage data={errors.password || errors.user} />

      <ButtonCenter
        onPress={handleSubmit(onSubmit)}
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
