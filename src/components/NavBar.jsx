import * as React from 'react';
import logo from "../assets/DefaultLogo.svg"
import MenuIcon from '@mui/icons-material/Menu'
import {
    AppBar,
    Box,
    Container,
    IconButton,
    Menu,
    Toolbar,
    Typography
} from '@mui/material';
import { Link } from "react-scroll"

export const NavBar = () => {
  const [anchorNav, setAnchorNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  }

  return (
    <AppBar position="fixed" sx={{backgroundColor: "secondary.main", color: "white.main"}}>
        <Container maxWidth="full">
            <Toolbar>
                { /* Desktop */ }
                <Box sx={{display: {xs: "none", md: "flex"}}}> 
                    <img className="navBarLogo" src={logo}/>
                </Box>
                
                <Typography variant="h4" nowrap sx={{
                    display: {xs: "none", md: "flex"}, 
                    fontFamily: "Open Sans",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "inherit"
                }}> William Ardila Sánchez </Typography>

                <Box sx={{display: {xs: "none", md: "flex"}, flex: 1, alignItems: "center", justifyContent: "end", mr:4, cursor: "pointer"}}>
                        <Link activeClass="active" smooth spy to="home"> 
                            <Typography sx={{ml: 6}}> Inicio </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="profile"> 
                            <Typography sx={{ml: 6}}> Perfil </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="studies"> 
                            <Typography sx={{ml: 6}}> Estudios </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="experience"> 
                            <Typography sx={{ml: 6}}> Experiencia </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="portfolio"> 
                            <Typography sx={{ml: 6}}> Portafolio </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="contact"> 
                            <Typography sx={{ml: 6}}> Contacto </Typography>
                        </Link>
                </Box>

                { /* Mobile */ }
                <Box sx={{display: {xs: "flex", md: "none"}}}> 
                    <img className="navBarLogo" src={logo}/>
                </Box>
                
                <Typography variant="h4" nowrap sx={{
                    display: {xs: "flex", md: "none"}, 
                    flexGrow: 1,
                    mr: 5,
                    fontFamily: "Open Sans",
                    fontSize: 14,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "inherit"
                }}> William Ardila Sánchez </Typography>

                <Box sx={{display: {xs: "flex", md: "none"}, flexGrow: 1}}>
                    <IconButton size="large" aria-label="aacount of current user" aria-controls="menu-appBar" 
                    aria-haspopup="true" color="inherit" onClick={handleOpenNavMenu}>
                        <MenuIcon /> 
                    </IconButton>

                    <Menu id="menu-appBar" anchorEl={anchorNav} anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    keepMounted transformOrigin={{vertical: "top", horizontal: "left"}} open={Boolean(anchorNav)} 
                    onClose={handleCloseNavMenu} sx={{display: {xs: "block", md: "none"}}}>

                        <Link activeClass="active" smooth spy to="home"> 
                            <Typography sx={{mr: 2, padding: 2, cursor: "pointer"}}> Inicio </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="profile"> 
                            <Typography sx={{mr: 2, padding: 2, cursor: "pointer"}}> Perfil </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="studies"> 
                            <Typography sx={{mr: 2, padding: 2, cursor: "pointer"}}> Estudios </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="experience"> 
                            <Typography sx={{mr: 2, padding: 2, cursor: "pointer"}}> Experiencia </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="portfolio"> 
                            <Typography sx={{mr: 2, padding: 2, cursor: "pointer"}}> Portafolio </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="contact"> 
                            <Typography sx={{mr: 2, padding: 2, cursor: "pointer"}}> Contacto </Typography>
                        </Link>
                    </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  );
}