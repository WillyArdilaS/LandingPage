import { GitHub } from "@mui/icons-material"
import { Box, Button, Grid, IconButton, Paper, Stack, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Portfolio } from "../database/Portfolio"

export const PortfolioPage = ({language, textData}) => {
  let cardData = {};
  Portfolio.map((project) =>(
    language === "spanish" ? cardData = project.es : cardData = project.en
  ))

  return (
    <Container maxWidth="full" sx={{
      flexGrow: 1,
      paddingTop: 10,
      paddingBottom: 6,
      backgroundColor: 'white.main'
    }}>

      <Typography variant="h1" sx={{
        fontFamily: "Open Sans",
        fontSize: 36,
        fontWeight: 800,
        textAlign: "center",
        textTransform: "uppercase",
        color: "black.main"
      }}> {textData.portfolio.title} </Typography>

      {cardData.map((card) =>(
        <Box key={card.id} sx={{width: "90%", marginX: "auto"}}>
          <Paper sx={{
            width: "100%", 
            margin: 8, 
            marginX: "auto", 
            padding: 3, 
            borderRadius: 5, 
            backgroundColor: "secondary.main",
            boxShadow: "card"
          }}>

            <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 1, md:3}}>
            <Grid item xs={12} sm={12} md={6} sx={{display: "flex", alignItems: "center", textAlign: "left"}}>
                <img src={card.image} alt={card.name} className="projectImage" />
              </Grid>

              <Grid item xs={12} sm={12} md={6} sx={{marginTop: 2, textAlign: "center"}}>
                <Typography variant="h2" sx={{
                  marginBottom: 4,
                  fontFamily: "Open Sans",
                  fontSize: 24,
                  fontWeight: 800,
                  lineHeight: 1.6,
                  color: "white.main"
                  }}> {card.name} </Typography>

                <Typography variant="h2" sx={{
                  width: "85%",
                  marginX: "auto",
                  marginBottom: 5,
                  fontFamily: "Open Sans",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "white.main"
                }}> {card.description} </Typography>

                <Typography variant="h2" sx={{
                  marginBottom: 4,
                  fontFamily: "Open Sans",
                  fontSize: 16,
                  fontWeight: "bold",
                  lineHeight: 1.6,
                  color: "white.main"
                }}> {card.stack} </Typography>

                <Stack direction="row" sx={{
                  width: {xs: "80%", sm: "36%", md: "55%", lg: "40%"}, 
                  marginX: "auto", 
                  marginTop: 4,
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center"
                }}>
                  <Button variant="contained" size="large" href={card.link_preview} target="_blank" sx={{
                    height: 40,
                    borderRadius: 2,
                    fontFamily: "Open Sans",
                    fontSize: 16,
                    fontWeight: 800,
                    textAlign: "center",
                    backgroundColor: "primary.main",
                    boxShadow: "button",
                    '&:hover': {
                      backgroundColor: "primary.hover"
                    }
                  }}> {textData.portfolio.buttonText} </Button>

                  <IconButton href={card.link_github} target="_blank" sx={{   
                    display: "flex",  
                    width: "10%",
                    height: "20%",
                    '& svg': {
                      fontSize: 44,
                    },
                    color: "white.main",
                    '&:hover': {
                      backgroundColor: "transparent",
                      transform: "scale(1.2)"
                    }
                  }}>
                    <GitHub />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </Paper> 
        </Box>
      ))}
    </Container>
  )
}