import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Switch,
  Box
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, handleThemeToggle }) => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/" sx={{ color: "#fff" }}>
            Loan Calculator
          </Button>
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          <Button component={Link} to="/" color="inherit">
            HOME
          </Button>
          <Button component={Link} to="/exchange-rates" color="inherit">
            EXCHANGE RATES (LIVE)
          </Button>
          <Button component={Link} to="/about" color="inherit">
            ABOUT
          </Button>
          <Button component={Link} to="/error" color="inherit">
            ERROR PAGE
          </Button>
        </Box>

        <IconButton color="inherit">
          <Switch
            checked={darkMode}
            onChange={handleThemeToggle}
            color="default"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
