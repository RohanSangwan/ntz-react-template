import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Layout: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        drawerWidth={drawerWidth}
      />
      <Sidebar
        handleDrawerClose={handleDrawerClose}
        open={open}
        drawerWidth={drawerWidth}
        DrawerHeader={DrawerHeader}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
