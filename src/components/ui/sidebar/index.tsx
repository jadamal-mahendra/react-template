import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { RouteConfig } from "src/routes/types";
import protectedRoutes from "src/routes/ProtectedRoutes";
import publicRoutes from "src/routes/PublicRoutes";

const drawerWidth = 240;

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

function Sidebar({ mobileOpen, handleDrawerToggle }: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});
  const ALL_ROUTES = [...protectedRoutes, ...publicRoutes];
  const handleClick = (id: string) => {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const renderMenuItems = (routes: RouteConfig[], isNested: boolean = false) =>
    routes.map((route) => {
      if (!route.menuOptions?.showInMenu) {
        return null;
      }
      return (
        <React.Fragment key={route.id}>
          <ListItem
            button
            component={Link}
            to={route.path}
            sx={{ pl: isNested ? 4 : 2 }}
            onClick={() => route.subRoutes && handleClick(route.id)}
          >
            <ListItemIcon>{route.menuOptions.icon}</ListItemIcon>
            <ListItemText primary={route.menuOptions.label} />
            {route.subRoutes &&
              route.subRoutes.length > 0 &&
              (open[route.id] ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          {route.subRoutes && route.subRoutes.length > 0 && (
            <Collapse in={open[route.id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenuItems(route.subRoutes, true)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    });

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap>
          My App
        </Typography>
      </Toolbar>
      <List>{renderMenuItems(ALL_ROUTES)}</List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        anchor="left"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: theme.palette.background.default,
            border: "none !important",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            margin: "10px",
            backgroundColor: theme.palette.background.default,
            border: "none !important",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
