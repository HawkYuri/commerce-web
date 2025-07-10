import { Paper, InputBase, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useThemeContext } from "@/theme/ThemeContext/useThemeContext";

function SearchField() {
  const { isDarkMode } = useThemeContext();

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 300,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: isDarkMode ? "black" : "inherit" }}
        placeholder="Buscar produtos"
        inputProps={{ "aria-label": "buscar produtos" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
export default SearchField;
