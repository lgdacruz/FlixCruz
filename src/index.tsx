import { StatusBar } from "expo-status-bar";
import React from "react";

import Contexts from "./contexts";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Contexts />
    </>
  );
}
