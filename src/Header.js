import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "./hot-dog.png";
import { useTheme } from "@mui/material/styles";

export default function ButtonAppBar({
  bgColor = "#EB7F96",
  title = "Wyszukiwarka przepisów",
  handleLogout,
  sx = {},
  variant = "regular",
  position = "static",
  titlestyle = {},
  logoutButtonStyle = {},
  logoStyle = { maxWidth: 30, maxHeight: 30, marginRight: 10 },
}) {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position={position}
        sx={{
          backgroundColor: bgColor,
         ...sx,
          [theme.breakpoints.down("sm")]: {
            padding: "8px",
            height: "56px",
          },
        }}
        variant={variant}
      >
        <Toolbar>
          <IconButton sx={logoStyle}>
            <img src={logo} alt="Logo" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
             ...titlestyle,
              [theme.breakpoints.down("sm")]: {
                fontSize: "16px",
              },
            }}
          >
            {title}
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
             ...logoutButtonStyle,
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
                padding: "4px 8px",
              },
            }}
          >
            Wyjdź
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}