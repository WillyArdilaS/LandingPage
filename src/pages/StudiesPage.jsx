import { Grid, Paper, Typography } from "@mui/material"
import { Container } from "@mui/system"
import studyIcon from "../assets/Study Icon.svg"
import { Studies } from "../database/Studies"

export const StudiesPage = ({language, textData}) => {
  let cardData = {};
  Studies.map((study) =>(
    language === "spanish" ? cardData = study.es : cardData = study.en
  ))

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
      }}> {textData.studies.title} </Typography>

      <Grid container>
        {cardData.map((card) =>(
          <Grid item xs={12} md={6} sx={{
            marginTop: {xs: 2, md: 0},
            textAlign: "center",
          }}>
            <Paper key={card.id} sx={{
              width: {xs: "100%", md: "65%"}, 
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
                  }}> {card.institute} </Typography>
  
                  <img src={studyIcon} alt="Icono de estudios" />
                </Grid>
  
              <Typography variant="h2" sx={{
                marginBottom: 1,
                fontFamily: "Open Sans",
                fontSize: 14,
                fontWeight: "bold",
                textAlign: "left",
                color: "white.main"
              }}> {card.course} </Typography>
            </Paper> 
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}