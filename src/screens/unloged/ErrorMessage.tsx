import { FieldError } from "react-hook-form";

import { TextCenter } from "../../style";

export default function ErrorMessage({ data }: { data: FieldError }) {
  if (data) {
    return (
      <TextCenter color="red" fs="20px">
        Campos obrigatórios
      </TextCenter>
    );
  }
}
