import { NavigationContext } from "@react-navigation/native";
import { useContext } from "react";

import { ButtonCenter, Img, TextCenter, ViewCenter } from "../../../style";
import { FilmTypes } from "../../../types";

export default function Sections({ list }: { list: FilmTypes[] }) {
  const navigation = useContext(NavigationContext);

  const theList = list.map((item) => {
    return (
      <ButtonCenter
        onPress={() => navigation.navigate("Player")}
        key={item.title}
        fd="row"
        justify="flex-start"
        pd="10px"
        mg="10px"
      >
        <Img source={{ uri: item.img }} />
        <ViewCenter wd="80%">
          <TextCenter bold fs="26px" textA="left">
            {item.title}
          </TextCenter>
          <TextCenter fs="16px" mg="10px" textA="left">
            {item.description}
          </TextCenter>
        </ViewCenter>
      </ButtonCenter>
    );
  });
  return <>{theList}</>;
}
