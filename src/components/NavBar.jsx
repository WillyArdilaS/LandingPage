import * as React from 'react';
import logo from "../assets/DefaultLogo.svg"
import spanishFlag from "../assets/Spanish.png"
import englishFlag from "../assets/English.png"
import MenuIcon from '@mui/icons-material/Menu'
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    Toolbar,
    Typography
} from '@mui/material';
import { Link } from "react-scroll"

export const NavBar = ({language, setLanguage, textData}) => {
  const [anchorNav, setAnchorNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  }

  const handleLanguage = () => {
    language === "spanish" ? setLanguage("english") : setLanguage("spanish");
  }

  return (
    <AppBar position="fixed" sx={{backgroundColor: "secondary.main", color: "white.main"}}>
        <Container maxWidth="full">
            <Toolbar>
                { /* Desktop */ }
                <Box sx={{display: {xs: "none", md: "flex"}, justifyContent: "flex-start", alignItems: "center"}}> 
                    <img className="navBarLogo" src={logo}/>
                    <Typography variant="h4" sx={{
                        display: {xs: "none", md: "flex"}, 
                        fontFamily: "Open Sans",
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "inherit"
                    }}> William Ardila Sánchez </Typography>
                </Box>
                

                <Box sx={{display: {xs: "none", md: "flex"}, flex: 1, alignItems: "center", justifyContent: "end", mr:4, cursor: "pointer"}}>
                        <Link activeClass="active" smooth spy to="home"> 
                            <Typography sx={{ml: 6, fontWeight: "bold"}}> {textData.navBar.text1} </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="profile"> 
                            <Typography sx={{ml: 6, fontWeight: "bold"}}> {textData.navBar.text2} </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="studies"> 
                            <Typography sx={{ml: 6, fontWeight: "bold"}}> {textData.navBar.text3} </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="experience"> 
                            <Typography sx={{ml: 6, fontWeight: "bold"}}> {textData.navBar.text4} </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="portfolio"> 
                            <Typography sx={{ml: 6, fontWeight: "bold"}}> {textData.navBar.text5} </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="contact"> 
                            <Typography sx={{ml: 6, fontWeight: "bold"}}> {textData.navBar.text6} </Typography>
                        </Link>

                        <Button onClick={handleLanguage} sx={{width: "8%", ml: 2, padding: 2 }}> 
                            <img src={language === "spanish" ? spanishFlag : englishFlag} className="languageIcon" /> 
                        </Button>
                </Box>

                { /* Mobile */ }
                <Box sx={{display: {xs: "flex", md: "none"}, alignItems: "center", ml:-2}}> 
                    <img className="navBarLogoMobile" src={logo}/>
                    <Typography variant="h4" sx={{
                        width: "100%",
                        display: {xs: "flex", md: "none"}, 
                        mr: 8,
                        fontFamily: "Open Sans",
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "inherit"
                    }}> Willy AS </Typography>
                </Box>
                

                <Box sx={{width: "50%", display: {xs: "flex", md: "none"}, justifyContent: "flex-end", mr:-1}}>
                    <Button onClick={handleLanguage} sx={{width: "8%"}}> 
                        <img src={language === "spanish" ? spanishFlag : englishFlag} className="languageIcon" /> 
                    </Button>

                    <IconButton size="large" aria-label="aacount of current user" aria-controls="menu-appBar" 
                    aria-haspopup="true" color="inherit" onClick={handleOpenNavMenu}>
                        <MenuIcon /> 
                    </IconButton>

                    <Menu id="menu-appBar" anchorEl={anchorNav} anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    keepMounted transformOrigin={{vertical: "top", horizontal: "left"}} open={Boolean(anchorNav)} 
                    onClose={handleCloseNavMenu} sx={{display: {xs: "block", md: "none"}}}>

                        <Link activeClass="active" smooth spy to="home"> 
                            <Typography sx={{mr: 2, padding: 2, fontWeight: "bold", cursor: "pointer"}}> {textData.navBar.text1} </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="profile"> 
                            <Typography sx={{mr: 2, padding: 2, fontWeight: "bold", cursor: "pointer"}}> {textData.navBar.text2} </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="studies"> 
                            <Typography sx={{mr: 2, padding: 2, fontWeight: "bold", cursor: "pointer"}}> {textData.navBar.text3}  </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="experience"> 
                            <Typography sx={{mr: 2, padding: 2, fontWeight: "bold", cursor: "pointer"}}> {textData.navBar.text4}  </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="portfolio"> 
                            <Typography sx={{mr: 2, padding: 2, fontWeight: "bold", cursor: "pointer"}}> {textData.navBar.text5} </Typography>
                        </Link>

                        <Link activeClass="active" smooth spy to="contact"> 
                            <Typography sx={{mr: 2, padding: 2, fontWeight: "bold", cursor: "pointer"}}> {textData.navBar.text6} </Typography>
                        </Link>
                    </Menu>
                </Box> 
            </Toolbar>
        </Container>
    </AppBar>
  );
}