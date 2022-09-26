import { Grid, Paper, Typography } from "@mui/material"
import { Container } from "@mui/system"
import htmlLogo from "../assets/HtmlLogo.png"
import cssLogo from "../assets/CssLogo.png"
import jsLogo from "../assets/JsLogo.png"
import reactLogo from "../assets/ReactLogo.png"

export const ProfilePage = ({textData}) => {
  return (
    <Container maxWidth="full" sx={{
      flexGrow: 1,
      paddingTop: 10,
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
      }}> {textData.profile.title} </Typography>

      <Typography variant="h1" sx={{
        width: {md: "70%"},
        marginX: "auto",
        marginTop: 8,
        fontFamily: "Open Sans",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 1.6,
        color: "black.main"
      }}> {textData.profile.text1} </Typography>

      <Grid container>
        <Grid item xs={12} md={3} sx={{
          marginTop: {xs: 2, md: 0},
          textAlign: "center",
        }}>
          <Paper sx={{
            width: {xs: "60%", sm: "45%", md: "65%"},
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginX: {xs: "auto", md: 4, lg: 6}, 
            marginTop: 4, 
            padding: {xs: 2, sm: 4, md: 3, lg: 5}, 
            borderRadius: {xs: 4, md: 3, lg: 5}, 
            boxShadow: "card",
          }}>
            <img src={htmlLogo} alt="Logo de HTML" className="profileCardImage"/>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3} sx={{
          marginTop: {xs: 2, md: 0},
          textAlign: "center",
        }}>
          <Paper sx={{
            width: {xs: "60%", sm: "45%", md: "65%"},
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginX: {xs: "auto", md: 4, lg: 6}, 
            marginTop: 4, 
            padding: {xs: 2, sm: 4, md: 3, lg: 5}, 
            borderRadius: {xs: 4, md: 3, lg: 5}, 
            boxShadow: "card"
          }}>
            <img src={cssLogo} alt="Logo de CSS" className="profileCardImage"/>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3} sx={{
          marginTop: {xs: 2, md: 0},
          textAlign: "center",
        }}>
          <Paper sx={{
            width: {xs: "60%", sm: "45%", md: "65%"},
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginX: {xs: "auto", md: 4, lg: 6}, 
            marginTop: 4, 
            padding: {xs: 2, sm: 4, md: 3, lg: 5}, 
            borderRadius: {xs: 4, md: 3, lg: 5}, 
            boxShadow: "card"
          }}>
            <img src={jsLogo} alt="Logo de JS" className="profileCardImage"/>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3} sx={{
          marginTop: {xs: 2, md: 0},
          textAlign: "center",
        }}>
          <Paper sx={{
            width: {xs: "60%", sm: "45%", md: "65%"},
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginX: {xs: "auto", md: 4, lg: 6}, 
            marginTop: 4, 
            padding: {xs: 2, sm: 4, md: 3, lg: 5}, 
            borderRadius: {xs: 4, md: 3, lg: 5},  
            boxShadow: "card"
          }}>
            <img src={reactLogo} alt="Logo de React" className="profileCardImage"/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}