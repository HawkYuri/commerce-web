import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router";

import { router } from "./Router/routes";
import { lightTheme, darkTheme } from "./theme";
import { useThemeContext } from "./theme/ThemeContext/useThemeContext";
import { CustomThemeProvider } from "./theme/ThemeContext/ThemeProvider";

function AppContent() {
  const { isDarkMode } = useThemeContext();

  return (
    <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
