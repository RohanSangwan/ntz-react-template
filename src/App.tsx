import React, { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, ThemeOptions } from "@mui/material/styles";
import { router } from "src/router";
import { useAppSelector } from "src/redux/hooks";
import { ThemesObjectType } from "src/types";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  const themes: ThemesObjectType = useAppSelector(
    (state) => state.theme.themes
  );
  const selectedTheme: string = useAppSelector(
    (state) => state.theme.selectedTheme
  );

  const themeToApply = useMemo<ThemeOptions>(() => {
    let allthemes: any = themes,
      theme: ThemeOptions = allthemes[selectedTheme];
    return theme;
  }, [themes, selectedTheme]);

  return (
    <ThemeProvider theme={themeToApply}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
