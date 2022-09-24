import { Grid, Paper, Typography } from "@mui/material"
import { Container } from "@mui/system"
import studyIcon from "../assets/Study Icon.svg"

export const StudiesPage = () => {
  return (
    <Container maxWidth="full" sx={{
      flexGrow: 1,
      paddingX: {xs: 5, md: 16},
      paddingTop: {xs: 10, md: 14},
      paddingBottom: 8,
      backgroundColor: 'white.main'
    }}>

      <Typography variant="h1" sx={{
        fontFamily: "Open Sans",
        fontSize: 36,
        fontWeight: 800,
        textAlign: "center",
        textTransform: "uppercase",
        color: "black.main"
      }}> Estudios </Typography>

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
            backgroundColor: "secondary.main",
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
                color: "white.main"
              }}> Universidad Distrital Francisco José de Caldas </Typography>

              <img src={studyIcon} alt="Icono de estudios" />
            </Grid>

            <Typography variant="h2" sx={{
              marginBottom: 1,
              fontFamily: "Open Sans",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "left",
              color: "white.main"
            }}> Ingeniería de sistemas (en curso) </Typography>
          </Paper>

          <Paper sx={{
            width: {sm: "100%", md: "60%"}, 
            marginTop: 6, 
            marginX: "auto", 
            paddingY: 2, 
            paddingX: 3,
            borderRadius: 5, 
            backgroundColor: "secondary.main",
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
                color: "white.main"
              }}> Fundación Internacional María Luisa Moreno (FIMLM) </Typography>

              <img src={studyIcon} alt="Icono de estudios" />
            </Grid>

            <Typography variant="h2" sx={{
              marginBottom: 1,
              fontFamily: "Open Sans",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "left",
              color: "white.main"
            }}> Diplomado FrontEnd con ReactJS (en curso) </Typography>
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
            backgroundColor: "secondary.main",
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
                color: "white.main"
              }}> Servicio Nacional de Aprendizaje (SENA) </Typography>

              <img src={studyIcon} alt="Icono de estudios"/>
            </Grid>

            <Typography variant="h2" sx={{
              marginBottom: 1,
              fontFamily: "Open Sans",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "left",
              color: "white.main"
            }}> Tecnólogo en producción de multimedia </Typography>
          </Paper>

          <Paper sx={{
            width: {xs: "100%", md: "60%"}, 
            marginTop: 6, 
            marginX: "auto", 
            paddingY: 2, 
            paddingX: 3,
            borderRadius: 5, 
            backgroundColor: "secondary.main",
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
                color: "white.main"
              }}> Universidad Tecnológica de Pereira </Typography>

              <img src={studyIcon} alt="Icono de estudios" />
            </Grid>

            <Typography variant="h2" sx={{
              marginBottom: 1,
              fontFamily: "Open Sans",
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "left",
              color: "white.main"
            }}> MinTic 2022 (en curso) </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}