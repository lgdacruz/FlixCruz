import { AntDesign } from "@expo/vector-icons";

import { TextCenter, ViewCenter } from "../../style";
export default function Account() {
  return (
    <ViewCenter align="flex-start">
      <ViewCenter fd="row" mg="20px">
        <TextCenter fs="24px" mg="0 10px">
          Nome: Cruz
        </TextCenter>
        <AntDesign name="edit" size={24} color="white" />
      </ViewCenter>
      <ViewCenter fd="row" mg="20px">
        <TextCenter fs="24px" mg="0 10px">
          Conteúdos liberados: 14+
        </TextCenter>
        <AntDesign name="caretdown" size={20} color="white" />
      </ViewCenter>
      <ViewCenter fd="row" mg="20px">
        <TextCenter fs="24px" mg="0 10px">
          Pagamento: Débito
        </TextCenter>
        <AntDesign name="caretdown" size={20} color="white" />
      </ViewCenter>
    </ViewCenter>
  );
}
