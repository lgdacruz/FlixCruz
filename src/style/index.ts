import styled from "styled-components/native";

import { StyleTypes } from "../types";

const theme = {
  dark: "#001500",
  medium: "#001500",
  light: "#3A7C2D",
  verylight: "#88CF7A",
};

export const ViewCenter = styled.View<StyleTypes>`
  display: flex;
  flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  background-color: ${theme.dark};
  height: ${(props) => (props.hg ? props.hg : "auto")};
  width: ${(props) => (props.wd ? props.wd : "auto")};
  margin: ${(props) => (props.mg ? props.mg : "0px")};
  padding: ${(props) => (props.pd ? props.pd : "0px")};
`;

export const ScrollCenter = styled.ScrollView<StyleTypes>`
  flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  background-color: ${theme.dark};
  height: ${(props) => (props.hg ? props.hg : "auto")};
  width: ${(props) => (props.wd ? props.wd : "auto")};
  margin: ${(props) => (props.mg ? props.mg : "0px")};
  padding: ${(props) => (props.pd ? props.pd : "0px")};
`;

export const TextCenter = styled.Text<StyleTypes>`
  color: ${(props) => (props.color ? props.color : "white")};
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  font-size: ${(props) => (props.fs ? props.fs : "20px")};
  text-align: ${(props) => (props.textA ? props.textA : "auto")};
  margin: ${(props) => (props.mg ? props.mg : "0px")};
  word-wrap: break-word;
`;

export const ButtonCenter = styled.TouchableOpacity<StyleTypes>`
  align-self: ${(props) => (props.self ? props.self : "auto")};
  display: flex;
  flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  background-color: ${(props) => (props.bg ? props.bg : theme.dark)};
  height: ${(props) => (props.hg ? props.hg : "auto")};
  width: ${(props) => (props.wd ? props.wd : "auto")};
  padding: ${(props) => (props.pd ? props.pd : "0px")};
  margin: ${(props) => (props.mg ? props.mg : "0px")};
`;

export const Img = styled.Image<StyleTypes>`
  width: ${(props) => (props.wd ? props.wd : "100px")};
  height: ${(props) => (props.hg ? props.hg : "100px")};
`;
