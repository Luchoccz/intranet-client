import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from "react-router-dom";
import { MenuItem, MenuList } from '@material-ui/core';
import 'react-calendar/dist/Calendar.css';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '10',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(98% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      marginRight: '1%',
      color: '#000000',
      fontWeight: 'bolder',
      borderRadius: '10px 10px 10px 10px',
      top: '1em',
      paddingTop: '.5em',
      paddingBottom: '.5em',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: '#e60000',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  MenuItem: {
    padding: theme.spacing(1.2),
    paddingLeft: theme.spacing(4),
    width: drawerWidth,
    color: '#646464',
    '&:hover': {
      color: '#e60000',
    },
  },
  Imageslogo: {
    position: 'absolute',
    top: '0',
    width: '5em',
    height: '7em',
    fontSize: 'cover',
  },
  profile:{
    position: 'relative',
    left: '54%',
    color: '#696969',
  },
}));

function NavbarInterface(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const isMenuOpen = Boolean(anchorEl);
const handleProfileMenuOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMobileMenuClose = () => {
};

const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
};

const handleMobileMenuOpen = (event) => {
};

const menuId = 'primary-search-account-menu';
const renderMenu = (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  </Menu>
);

  const drawer = (
    <div className="container-menuI">
      <div className="logov2I">
      </div>
      <div className={ classes.toolbar } />
      <MenuList>
        <MenuItem className={ classes.MenuItem } component= { RouterLink } to="/interfaz">
          Inicio
        </MenuItem>
        <MenuItem className={ classes.MenuItem } component= { RouterLink } to="/interfaz/opcionesdeusuario">
          Opciones de Empleado
        </MenuItem>
        <MenuItem className={ classes.MenuItem } component= { RouterLink } to="/interfaz/noticias">
          Noticias
        </MenuItem>
        <MenuItem className={ classes.MenuItem } component= { RouterLink } to="/interfaz/servicios">
          Servicios
        </MenuItem>
        <MenuItem className={ classes.MenuItem } component= { RouterLink } to="/">
          Universidad Corporativa
        </MenuItem>
        <Divider />
        <MenuItem className={ classes.MenuItem } component= { RouterLink } to="/">
          Correo
        </MenuItem>
        <MenuItem className={ classes.MenuItem } component= { RouterLink } to="/interfaz/calendario">
          Calendario
        </MenuItem>
        <MenuItem className={ classes.MenuItem } component= { RouterLink } to="/interfaz/libretadedirecciones">
          Libreta de Direcciones
        </MenuItem>
      </MenuList>
      <Button type="submit" href="/" style={{backgroundColor: '#E32726', padding: '0.8em', paddingLeft: '5em', paddingRight: '5em',color:'#ffffff', left: '5em', top: '13em', fontSize: 'x-small' }}>Cerrar Sesion</Button>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={ classes.root }>
      <CssBaseline />
      <AppBar color="secondary" position="fixed" style={{ background: '#ffffff', boxShadow: 'none', }} className={ classes.appBar }>
      <ThemeProvider theme={ theme }>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={ handleDrawerToggle }
            className={ classes.menuButton }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" style={{ fontWeight: 'bold' }} noWrap>
            Bienvenido a la intranet!
          </Typography>
          {auth && (
            <div className={ classes.profile }>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={ handleMenu }
                color="inherit"
              >
                <AccountCircle style={{ fontSize: 40 }} />
              </IconButton>
              <Menu
                noWrap
                id="menu-appbar"
                anchorEl={ anchorEl }
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={ open }
                onClose={ handleClose }
              >
                <MenuItem onClick={ handleClose }>Perfil</MenuItem>
                <MenuItem onClick={ handleClose }>Mi cuenta</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
        </ThemeProvider>
      </AppBar>
      <nav className={ classes.drawer } aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={ container }
            variant="temporary"
            anchor={ theme.direction === 'rtl' ? 'right' : 'left' }
            open={mobileOpen}
            onClose={ handleDrawerToggle }
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            { drawer }
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            { drawer }
          </Drawer>
        </Hidden>
      </nav>
      <main className={ classes.content }>
      </main>
    </div>
  );
}

export default NavbarInterface;