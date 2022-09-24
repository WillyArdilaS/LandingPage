import { Grid, Paper, Typography } from "@mui/material"
import { Container } from "@mui/system"
import workIcon from "../assets/Work Icon.svg"

export const ExperiencePage = () => {
  return (
    <Container maxWidth="full" sx={{
      flexGrow: 1,
      paddingTop: {xs: 10, md: 14},
      paddingBottom: 8,
      backgroundColor: 'primary.main'
    }}>

      <Typography variant="h1" sx={{
        fontFamily: "Open Sans",
        fontSize: 36,
        fontWeight: 800,
        textAlign: "center",
        textTransform: "uppercase",
        color: "black.main"
      }}> Experiencia </Typography>

      <Grid container>
        <Grid item xs={12} md={6} sx={{
          marginTop: {xs: 2, md: 0},
          textAlign: "center",
        }}>
          <Paper sx={{
            width: {xs: "100%", md: "60%"}, 
            marginTop: 6, 
            marginX: "auto", 
            paddingY: 2, 
            paddingX: 3,
            borderRadius: 5, 
            backgroundColor: "white.main",
            boxShadow: "card"
          }}>
            <Grid sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start"}}>
              <Typography variant="h2" sx={{
                  marginBottom: 4,
                  marginRight: 2,
                  fontFamily: "Open Sans",
                  fontSize: 18,
                  fontWeight: 800,
                  textAlign: "left",
                  color: "black.main"
                }}> Nombre de la empresa </Typography>

                <img src={workIcon} alt="Icono de estudios" />
              </Grid>

            <Typography variant="h2" sx={{
              marginBottom: 1,
              fontFamily: "Open Sans",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "left",
              color: "black.main"
            }}> Cargo ocupado </Typography>
          </Paper> 
        </Grid>

        <Grid item xs={12} md={6} sx={{
          marginTop: 0,
          textAlign: "center",
        }}>
          <Paper sx={{
            width: {xs: "100%", md: "60%"}, 
            marginTop: 6, 
            marginX: "auto", 
            paddingY: 2, 
            paddingX: 3,
            borderRadius: 5, 
            backgroundColor: "white.main",
            boxShadow: "card"
          }}>
            <Grid sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start"}}>
              <Typography variant="h2" sx={{
                marginBottom: 4,
                marginRight: 2,
                fontFamily: "Open Sans",
                fontSize: 18,
                fontWeight: 800,
                textAlign: "left",
                color: "black.main"
              }}> Nombre de la empresa </Typography>

              <img src={workIcon} alt="Icono de estudios" />
            </Grid>

            <Typography variant="h2" sx={{
              marginBottom: 1,
              fontFamily: "Open Sans",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "left",
              color: "black.main"
            }}> Cargo ocupado </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}