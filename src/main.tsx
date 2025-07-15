import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppConfig } from "./config/router.config";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" stroageKey="vite-ui-theme">
    <StrictMode>
      <AppConfig />
    </StrictMode>
  </ThemeProvider>
);
