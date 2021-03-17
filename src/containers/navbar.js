import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
};

function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElTwo, setAnchorElTwo] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (second = false) =>
    second ? setAnchorElTwo(null) : setAnchorEl(null);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={() => handleMenuClose(false)}
    >
      <MenuItem onClick={() => handleMenuClose(false)}>Normas</MenuItem>
      <MenuItem onClick={() => handleMenuClose(false)}>Politicas</MenuItem>
      <MenuItem onClick={() => handleMenuClose(false)}>Procedimientos</MenuItem>
      <MenuItem onClick={() => handleMenuClose(false)}>Procesos</MenuItem>
      <MenuItem onClick={() => handleMenuClose(false)}>Manuales</MenuItem>
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{  backgroundColor:'#ffffff' }}>
        <Toolbar>
        <div className="container-icono" />
          <div className="menu-escritorio">
            <ul>

            <li><Button edge="end" href="/" color="inherit">INICIO</Button></li>

            <li><Button edge="end" href="/nosotros" color="inherit">NOSOTROS</Button></li>

            <li><Button edge="end" aria-controls={menuId} aria-haspopup="true" onClick={ handleClick } color="inherit">BIBLIOTECA<ExpandMoreIcon /></Button></li>

            <li><Button edge="end" href="/contacto" color="inherit">CONTACTANOS</Button></li>

            </ul>

            <div className="Bis">
            <Button
              style={{paddingLeft: '4em', paddingRight: '4em'}}
              edge="end"
              href="/iniciarsesion"
              color="inherit"
            >
              Login
            </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default connect(mapStateToProps, null)(Navbar);