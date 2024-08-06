import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "src/components/ui/header";
import Sidebar from "src/components/ui/sidebar";

function WebLayout({ children }: { children: any }) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const preventDrag = (event: React.DragEvent) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{ display: "flex", background: theme?.palette?.background?.default }}
      onDragStart={preventDrag}
    >
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
          background: theme?.palette?.background?.paper,
          height: `calc(100vh - 15px )`,
          margin: isMobile ? 0 : 1,
          borderRadius: 2.5,
          paddingTop: 10,
          position: "relative",
        }}
        onDragStart={preventDrag}
      >
        <Header onDrawerToggle={handleDrawerToggle} />
        {children}
      </Box>
    </Box>
  );
}

export default WebLayout;
