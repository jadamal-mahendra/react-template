import React from "react";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { ToggleTheme } from "src/components/ui/toggleTheme";

interface HeaderProps {
  onDrawerToggle: () => void;
}

function Header({ onDrawerToggle }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="absolute"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        ...(isMobile
          ? {
              left: 0,
              right: 0,
              width: "100%",
              boxShadow: "none",
            }
          : {
              width: `calc(100% - 20px)`,
              marginTop: 1,
              marginRight: 1,
              left: "10px",
              right: "10px",
              borderRadius: 1,
            }),
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Grid container justifyContent="space-between">
          <Typography variant="h6" noWrap>
            My App
          </Typography>
          <ToggleTheme />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
