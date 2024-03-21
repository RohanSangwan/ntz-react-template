import * as React from "react";
import {
  styled,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  FormControlLabel,
  Menu,
  MenuItem,
  Fab,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Menu as MenuIcon, Person as PersonIcon } from "@mui/icons-material";
import { useAppSelector, useAppDispatch } from "src/redux/hooks";
import { changeTheme } from "src/redux/themeSlice";

interface NavbarProps {
  open: boolean;
  handleDrawerOpen: Function;
  drawerWidth: number;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth?: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar: React.FC<NavbarProps> = ({
  open,
  handleDrawerOpen,
  drawerWidth,
}) => {
  const navigate = useNavigate()
  const selectedTheme: string = useAppSelector(
    (state) => state.theme.selectedTheme
  );
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const toggleOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleDrawerOpen()}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          React Template
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={selectedTheme === "dark"}
              onChange={(e) =>
                dispatch(changeTheme(e.target.checked ? "dark" : "light"))
              }
              color="warning"
              name="theme-select"
            />
          }
          label="Toggle to change theme"
        />
        <Fab
          id="basic-button"
          aria-controls={toggleOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={toggleOpen ? "true" : undefined}
          onClick={handleClick}
          size="medium"
        >
          <PersonIcon />
        </Fab>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={toggleOpen}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => {
            localStorage.removeItem('token')
            navigate('/login')
          }}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
