import { GitHub } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { Container } from "@mui/system"
import logo from "../assets/DefaultLogo.svg"

export const Footer = () => {
  return (
    <Container maxWidth="full" sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingX: {xs: 5, md: 20},
      backgroundColor: 'secondary.main'
    }}>

      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",}}>
        <img className="footerLogo" src={logo}/>
        <Typography variant="h6" sx={{
          display: "flex",
          marginTop: 1,
          marginLeft: 2,
          fontSize: {xs: 16, md: 18},
          fontFamily: "Open Sans",
          fontWeight: 800,
          color: "white.main",
        }}> William Ardila Sánchez </Typography>
      </Box>
    </Container>
  )
}