import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon
              sx={{
                "&:hover": {
                  color: "red",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "Roboto" }}>
            Site Title
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
