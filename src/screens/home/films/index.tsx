import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";

import { ThemeUse } from "../../../contexts/theme";
import { ButtonCenter, ScrollCenter, ViewCenter } from "../../../style";
import { FilmTypes } from "../../../types";
import Sections from "../components/sections";

const filmslist: FilmTypes[] = [
  {
    img: "https://f001.backblazeb2.com/file/papocine/2012/04/20180529-download.jpg",
    title: "Ilha do medo",
    description:
      "Um suspense repleto de plotTwist que vai te prender do início ao fim, com grandes estrelas no elenco...",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/f/ff/Uninvitedposter.jpg",
    title: "Mistério das duas irmãs",
    description:
      "Um suspense repleto de plotTwist que vai te prender do início ao fim, com grandes estrelas no elenco",
  },
  {
    img: "https://br.web.img2.acsta.net/medias/nmedia/18/87/14/49/19872468.jpg",
    title: "Labirinto do fauno",
    description:
      "Um suspense repleto de plotTwist que vai te prender do início ao fim, com grandes estrelas no elenco",
  },
  {
    img: "https://br.web.img3.acsta.net/pictures/14/05/22/20/00/155413.jpg",
    title: "Amnésia",
    description:
      "Um suspense repleto de plotTwist que vai te prender do início ao fim, com grandes estrelas no elenco",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/pt/3/34/Outros_2001.jpg",
    title: "Os outros",
    description:
      "Um suspense repleto de plotTwist que vai te prender do início ao fim, com grandes estrelas no elenco",
  },
  {
    img: "https://s.aficionados.com.br/imagens/parasita_cke.jpg",
    title: "Parasita",
    description:
      "Um suspense repleto de plotTwist que vai te prender do início ao fim, com grandes estrelas no elenco...",
  },
  {
    img: "https://s.aficionados.com.br/imagens/clube-da-luta-0_cke.jpg",
    title: "Clube da luta",
    description:
      "Um suspense repleto de plotTwist que vai te prender do início ao fim, com grandes estrelas no elenco",
  },
  {
    img: "https://s.aficionados.com.br/imagens/seven_cke.jpg",
    title: "Seven",
    description:
      "Um suspense repleto de plotTwist que vai te prender do início ao fim, com grandes estrelas no elenco",
  },
  {
    img: "https://s.aficionados.com.br/imagens/a-vila_cke.jpg",
    title: "A vila",
    description:
      "Um suspense repleto de plotTwist que vai te prender do início ao fim, com grandes estrelas no elenco",
  },
  {
    img: "https://s.aficionados.com.br/imagens/corra_cke.jpg",
    title: "Corra",
    description:
      "Um suspense repleto de plotTwist que vai te prender do início ao fim, com grandes estrelas no elenco",
  },
];

export default function Films() {
  const [films, setFilms] = useState<FilmTypes[]>([]);
  const [index, setIndex] = useState(4);
  const [loading, setLoading] = useState(false);

  const colors = ThemeUse();

  const scrollRef = useRef<ScrollView>();

  const GetFilms = async () => {
    setLoading(true);
    const arr: Promise<FilmTypes[]> = new Promise((resolve) => {
      setTimeout(() => {
        resolve(filmslist.slice(0, index));
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
