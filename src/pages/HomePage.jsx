import { GitHub } from "@mui/icons-material"
import { Box, Grid, IconButton, Typography } from "@mui/material"
import { Container } from "@mui/system"
import avatarIcon from "../assets/AvatarIcon.svg"

export const HomePage = () => {
  return (
    <Container maxWidth="full" sx={{
      flexGrow: 1,
      paddingX: {xs: 5, md: 16},
      paddingTop: {xs: 12, md: 16},
      paddingBottom: 8,
      backgroundColor: 'white.main'
    }}>

      <Grid container>
        <Grid item xs={12} md={6} sx={{textAlign: "center"}}>
          <Typography variant="h1" sx={{
            fontFamily: "Open Sans",
            fontSize: 52,
            fontWeight: 800,
            color: "black.main"
          }}> Hola !! Mi nombre es </Typography>

          <Typography variant="h1" sx={{
            marginTop: 2,
            marginBottom: 4,
            fontFamily: "Open Sans",
            fontSize: 52,
            fontWeight: 800,
            color: "primary.main",
            textTransform: "uppercase"
          }}> William </Typography>

          <Box component={Grid} item xs={12} display={{md: "none"}} sx={{
            marginY: 2,
            marginX: "auto"
          }}>
            <img src={avatarIcon} alt="Avatar" />
          </Box>

          <Typography variant="p" sx={{
            fontFamily: "Open Sans",
            fontSize: 26,
            fontWeight: "bold",
            color: "black.main"
          }}> Conoce un poco más de mi </Typography>

          <IconButton href="https://github.com/WillyArdilaS" target="_blank" sx={{   
            display: "flex",  
            width: "10%",
            height: "20%",
            marginX: "auto",
            marginY: 4,
            '& svg': {
              fontSize: 54,
            },
            color: "black.main",
            '&:hover': {
              backgroundColor: "transparent",
              transform: "scale(1.2)"
            }
          }}>
            <GitHub />
          </IconButton>
        </Grid>

        <Box component={Grid} item md={6} display={{xs: "none", md: "block", lg: "block"}} sx={{
          marginTop: 0,
          textAlign: {md:"right", lg:"center"},
        }}>
          <img src={avatarIcon} alt="Avatar" />
        </Box>
      </Grid>
    </Container>
  )
}