import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

import { AuthUse } from "../../contexts/auth";
import { ButtonCenter, Input, TextCenter, ViewCenter } from "../../style";
export default function Account() {
  const { LogOut, user, ChangeData } = AuthUse();

  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState(user);

  const ChangeUserData = () => {
    ChangeData(newUser);
    setShow(false);
  };

  return (
    <ViewCenter align="flex-start">
      <ViewCenter>
        {show ? (
          <ViewCenter fd="row" mg="20px">
            <Input
              value={newUser.name}
              onChangeText={(value) => setNewUser({ ...user, name: value })}
            />
            <ButtonCenter onPress={ChangeUserData}>
              <AntDesign name="save" size={24} color="white" />
            </ButtonCenter>
          </ViewCenter>
        ) : (
          <ViewCenter fd="row" mg="20px">
            <TextCenter fs="24px" mg="0 10px">
              Nome: {user.name}
            </TextCenter>
            <ButtonCenter onPress={() => setShow(true)}>
              <AntDesign name="edit" size={24} color="white" />
            </ButtonCenter>
          </ViewCenter>
        )}
      </ViewCenter>
      <ViewCenter fd="row" mg="20px">
        <TextCenter fs="24px" mg="0 10px">
          Conteúdos liberados: 14+
        </TextCenter>
      </ViewCenter>
      <ViewCenter fd="row" mg="20px">
        <TextCenter fs="24px" mg="0 10px">
          Pagamento: Débito
        </TextCenter>
      </ViewCenter>

      <ButtonCenter
        onPress={LogOut}
        self="center"
        bg="red"
        wd="150px"
        mg="20px"
      >
        <TextCenter bold color="black">
          Sair
        </TextCenter>
      </ButtonCenter>
    </ViewCenter>
  );
}
