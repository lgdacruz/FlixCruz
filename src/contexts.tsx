import { ThemeProvider } from "./contexts/theme";
import Navigations from "./navigations";

export default function Contexts() {
  return (
    <ThemeProvider>
      <Navigations />
    </ThemeProvider>
  );
}
