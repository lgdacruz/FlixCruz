import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";

import { ThemeUse } from "../../../contexts/theme";
import { ButtonCenter, ScrollCenter, ViewCenter } from "../../../style";
import { FilmTypes } from "../../../types";
import Sections from "../components/sections";

const serieList: FilmTypes[] = [
  {
    img: "https://s.aficionados.com.br/imagens/aaaabeq9fg04r6qpcr1dq7vkoglppululbgboyy60tgknh9ksxwh5y2vay7jdwhrl4qqv1nhshzxctljrm-3v-wjc5j0p-ew_cke.jpg",
    title: "Breaking Bad",
    description:
      "Acompanhe as aventuras de personagens carismáticos repletas de mistérios. A trama vai te prender a cada episódio",
  },
  {
    img: "https://s.aficionados.com.br/imagens/aaaabujwekf3xkpwnulrzu4h0oknugrhow-gbspcujdlewiiydjb4zcu3-4scqce0b0drmbnjlfhznc6xvp5wbp0e8flhjkm_cke.jpg",
    title: "Sherlock",
    description:
      "Acompanhe as aventuras de personagens carismáticos repletas de mistérios. A trama vai te prender a cada episódio",
  },
  {
    img: "https://s.aficionados.com.br/imagens/aaaabckwwaml0mfdmjgbypuqxnfp-lxndzlmm0-c2jysd9syhlrarzp8g7cdtd-sa5jnnxonbehuxesysffqsmg9frmltspc_cke.jpg",
    title: "Dark",
    description:
      "Acompanhe as aventuras de personagens carismáticos repletas de mistérios. A trama vai te prender a cada episódio",
  },
  {
    img: "https://s.aficionados.com.br/imagens/legiao-snhyjgvk1bt7qkw9mfxwn4ez8juzohp62airsdefbx-jpg_cke.jpg",
    title: "Black Mirror",
    description:
      "Acompanhe as aventuras de personagens carismáticos repletas de mistérios. A trama vai te prender a cada episódio",
  },
  {
    img: "https://s.aficionados.com.br/imagens/68026308-narcos_cke.jpg",
    title: "Narcos",
    description:
      "Acompanhe as aventuras de personagens carismáticos repletas de mistérios. A trama vai te prender a cada episódio",
  },
  {
    img: "https://s.aficionados.com.br/imagens/aaaabxq-vqjf0hxgmuqqhnb8nxwpz8iemzc2upisv1myxfe2kxo-ioudyl-tuaaksqen-ipui5s3ax8in2xqquiqkq7l7csl_cke.jpg",
    title: "Stranger Things",
    description:
      "Acompanhe as aventuras de personagens carismáticos repletas de mistérios. A trama vai te prender a cada episódio...",
  },
  {
    img: "https://s.aficionados.com.br/imagens/mindhunter-3-temporada_cke.jpg",
    title: "Mindhunter",
    description:
      "Acompanhe as aventuras de personagens carismáticos repletas de mistérios. A trama vai te prender a cada episódio",
  },
  {
    img: "https://s.aficionados.com.br/imagens/image-1844_cke.jpg",
    title: "Twin Peaks",
    description:
      "Acompanhe as aventuras de personagens carismáticos repletas de mistérios. A trama vai te prender a cada episódio",
  },
  {
    img: "https://s.aficionados.com.br/imagens/aaaabxpy6m8jqfc4vjuz08agmum00xs-bttezuv0podoykvmmvlrbtb7791lvtogi43wa56vuljxsoa5aigc8vamlaowosnn_cke.jpg",
    title: "Luther",
    description:
      "Acompanhe as aventuras de personagens carismáticos repletas de mistérios. A trama vai te prender a cada episódio",
  },
  {
    img: "https://s.aficionados.com.br/imagens/aaaabwwptlk8wfiitpwhc06chqbccpubsh5y665qj7b5mvleudwotqz0mbslux8uxwsqigunpyhgbjcmxecjijcc-qebabbd_cke.jpg",
    title: "The Assassination of Gianni Versace: American Crime Story",
    description:
      "Acompanhe as aventuras de personagens carismáticos repletas de mistérios. A trama vai te prender a cada episódio",
  },
];

export default function Series() {
  const [films, setFilms] = useState<FilmTypes[]>([]);
  const [index, setIndex] = useState(4);
  const [loading, setLoading] = useState(false);

  const colors = ThemeUse();

  const scrollRef = useRef<ScrollView>();

  const GetFilms = async () => {
    setLoading(true);
    const arr: Promise<FilmTypes[]> = new Promise((resolve) => {
      setTimeout(() => {
        resolve(serieList.slice(0, index));
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
