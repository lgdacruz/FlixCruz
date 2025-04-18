import { AntDesign } from "@expo/vector-icons";

import { AuthUse } from "../../contexts/auth";
import { TextCenter, ViewCenter } from "../../style";

export default function Settings() {
  const { user } = AuthUse();

  return (
    <ViewCenter align="flex-start">
      <ViewCenter fd="row" mg="20px">
        <TextCenter fs="24px" mg="0 10px">
          Usuário: {user.name}
        </TextCenter>
        <AntDesign name="caretdown" size={20} color="white" />
      </ViewCenter>
      <ViewCenter fd="row" mg="20px">
        <TextCenter fs="24px" mg="0 10px">
          Idioma: PT-BR
        </TextCenter>
        <AntDesign name="caretdown" size={20} color="white" />
      </ViewCenter>
      <ViewCenter fd="row" mg="20px">
        <TextCenter fs="24px" mg="0 10px">
          Plano: 2 telas
        </TextCenter>
        <AntDesign name="caretdown" size={20} color="white" />
      </ViewCenter>
      <ViewCenter fd="row" mg="20px">
        <TextCenter fs="24px" mg="0 10px">
          Renovação: 15/Dez
        </TextCenter>
        <AntDesign name="caretdown" size={20} color="white" />
      </ViewCenter>
    </ViewCenter>
  );
}
