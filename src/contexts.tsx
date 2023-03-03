import { AuthProvider } from "./contexts/auth";
import { ThemeProvider } from "./contexts/theme";
import Navigations from "./navigations";

export default function Contexts() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navigations />
      </ThemeProvider>
    </AuthProvider>
  );
}
