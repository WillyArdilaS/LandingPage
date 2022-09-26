import { GitHub, Twitter, WhatsApp } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"
import { Container } from "@mui/system"
import logo from "../assets/DefaultLogo.svg"

export const Footer = () => {
  return (
    <Container maxWidth="full" sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingX: {xs:2, md: 6},
      paddingY: {xs: 1, md: 0},
      backgroundColor: 'secondary.main'
    }}>

      <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Box sx={{width: {xs: "50%", md: "18%"}, display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
          <img className="footerLogo" src={logo}/>
          <Typography variant="h6" sx={{
            display: "flex",
            fontSize: {xs: 18, md: 16},
            fontFamily: "Open Sans",
            fontWeight: "bold",
            color: "white.main",
          }}> Willy AS </Typography>
        </Box>

        <Box sx={{
          width: {xs: "45%", md: "20%"}, 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginRight: {xs: 1, md: 6}
        }}>
          <IconButton href="https://github.com/WillyArdilaS" target="_blank" sx={{   
            display: "flex",  
            width: "10%",
            height: "20%",
            marginY: {xs: 0, md: 0.5},
            '& svg': {
              fontSize: {xs: 32, md: 45},
            },
            color: "white.main",
            '&:hover': {
              backgroundColor: "transparent",
              transform: "scale(1.1)"
            }
          }}>
            <GitHub />
          </IconButton>
          
          <IconButton href="https://twitter.com/W_A_A_S_" target="_blank" sx={{   
            display: "flex",  
            width: "10%",
            height: "20%",
            marginY: {xs: 0, md: 0.5},
            '& svg': {
              fontSize: {xs: 32, md: 45},
            },
            color: "white.main",
            '&:hover': {
              backgroundColor: "transparent",
              transform: "scale(1.1)"
            }
          }}>
            <Twitter />
          </IconButton>

          <IconButton href="https://wa.me/573192737379?text=Hola Willy, me gustaría hablar contigo sobre..." target="_blank" sx={{   
            display: "flex",  
            width: "10%",
            height: "20%",
            marginY: {xs: 0, md: 0.5},
            '& svg': {
              fontSize: {xs: 32, md: 45},
            },
            color: "white.main",
            '&:hover': {
              backgroundColor: "transparent",
              transform: "scale(1.1)"
            }
          }}>
            <WhatsApp />
          </IconButton>
        </Box>
      </Box>
    </Container>
  )
}