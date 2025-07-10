import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useThemeContext } from "@/theme/ThemeContext/useThemeContext";
import { Link } from "react-router-dom";
import SearchField from "../SearchField";

export function Header() {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <AppBar position="static" color="primary" elevation={1} sx={{ mb: 2 }}>
      <Toolbar sx={{ flexWrap: "wrap", gap: 2 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          Commerce 3DPrinter
        </Typography>

        <SearchField />
        {/* Ações */}
        <Stack direction="row" spacing={1} sx={{ marginLeft: "auto" }}>
          <IconButton
            onClick={toggleTheme}
            aria-label="toggle theme"
            sx={{
              color: (theme) =>
                theme.palette.getContrastText(theme.palette.primary.main),
            }}
          >
            {isDarkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
          <Button component={Link} to="/login" color="secondary">
            Login
          </Button>
          <Button component={Link} to="/contato" color="secondary">
            Contato
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
