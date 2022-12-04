import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";

import { ThemeUse } from "../../../contexts/theme";
import { ButtonCenter, ScrollCenter, ViewCenter } from "../../../style";
import { FilmTypes } from "../../../types";
import Sections from "../components/sections";

const animeList: FilmTypes[] = [
  {
    img: "https://s.aficionados.com.br/imagens/fullmetal-alchemist-brotherhood-1_cke.jpg",
    title: "Fullmetal Alchemist",
    description:
      "Acompanhe as aventuras do protagonista nessa jornada repleta de desafios e superações",
  },
  {
    img: "https://s.aficionados.com.br/imagens/kakegurui-2-2_cke.jpg",
    title: "Kakegurui",
    description:
      "Acompanhe as aventuras do protagonista nessa jornada repleta de desafios e superações",
  },
  {
    img: "https://s.aficionados.com.br/imagens/jojos-bizarre-adventure-0_cke.jpg",
    title: "JoJo's Bizarre Adventure",
    description:
      "Acompanhe as aventuras do protagonista nessa jornada repleta de desafios e superações",
  },
  {
    img: "https://s.aficionados.com.br/imagens/tokyo-revengers_cke.jpg",
    title: "Tokyo Revengers",
    description:
      "Acompanhe as aventuras do protagonista nessa jornada repleta de desafios e superações",
  },
  {
    img: "https://s.aficionados.com.br/imagens/record-of-ragnarok_cke.jpg",
    title: "Record of Ragnarok",
    description:
      "Acompanhe as aventuras do protagonista nessa jornada repleta de desafios e superações",
  },
  {
    img: "https://s.aficionados.com.br/imagens/bleach-17_cke.jpg",
    title: "Bleach",
    description:
      "Acompanhe as aventuras do protagonista nessa jornada repleta de desafios e superações...",
  },
  {
    img: "https://s.aficionados.com.br/imagens/death-note-3_cke.jpg",
    title: "Death Note",
    description:
      "Acompanhe as aventuras do protagonista nessa jornada repleta de desafios e superações",
  },
  {
    img: "https://s.aficionados.com.br/imagens/one-punch-man-2_cke.jpg",
    title: "One-Punch Man",
    description:
      "Acompanhe as aventuras do protagonista nessa jornada repleta de desafios e superações",
  },
  {
    img: "https://s.aficionados.com.br/imagens/xxxholic-anime.jpg",
    title: "xxxHolic",
    description:
      "Acompanhe as aventuras do protagonista nessa jornada repleta de desafios e superações",
  },
  {
    img: "https://s.aficionados.com.br/imagens/cowboy-bebop-1-0.jpg",
    title: "Cowboy Bebop",
    description:
      "Acompanhe as aventuras do protagonista nessa jornada repleta de desafios e superações",
  },
];

export default function Animes() {
  const [films, setFilms] = useState<FilmTypes[]>([]);
  const [index, setIndex] = useState(4);
  const [loading, setLoading] = useState(false);

  const colors = ThemeUse();

  const scrollRef = useRef<ScrollView>();

  const GetFilms = async () => {
    setLoading(true);
    const arr: Promise<FilmTypes[]> = new Promise((resolve) => {
      setTimeout(() => {
        resolve(animeList.slice(0, index));
      }, 1000);
    });
    setIndex(index + 4);
    setFilms(await arr);
    setLoading(false);
  };

  useEffect(() => {
    GetFilms();
  }, []);

  return (
    <ViewCenter pd="0px 0px 40px 0px" wd="100%" hg="100%">
      <ScrollCenter
        wd="100%"
        pd="10px 0px"
        ref={scrollRef}
        onContentSizeChange={() =>
          scrollRef.current.scrollToEnd({ animated: true })
        }
      >
        <Sections list={films} />
      </ScrollCenter>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ButtonCenter onPress={GetFilms}>
          <AntDesign name="caretdown" size={24} color={colors.verylight} />
        </ButtonCenter>
      )}
    </ViewCenter>
  );
}
