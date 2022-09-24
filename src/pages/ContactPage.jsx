import { Button, FormControl, Grid, Typography, TextField }  from "@mui/material"
import { Container } from "@mui/system"

export const ContactPage = () => {
  return (
    <Container maxWidth="full" sx={{
      flexGrow: 1,
      paddingTop: {xs: 10, md: 8},
      paddingBottom: 6,
      backgroundColor: 'primary.main'
    }}>

      <Typography variant="h1" sx={{
        fontFamily: "Open Sans",
        fontSize: 36,
        fontWeight: 800,
        textAlign: "center",
        textTransform: "uppercase",
        color: "black.main"
      }}> Contáctame </Typography>

      <Grid container>
        <FormControl sx={{width: "100%", marginTop: 6, display: "flex", alignItems: "center",}}>
          <Grid item sx={{width: "90%", display: "flex", justifyContent: "space-between"}}>
            <TextField id="formName" className="formField" label="Nombre" variant="filled" sx={{
              width: {xs:"45%", md: "40%"},
              backgroundColor: "white.main"
            }}></TextField>

            <TextField id="formLastName" label="Apellido" variant="filled" sx={{
              width: {xs:"45%", md: "40%"},
              backgroundColor: "white.main"
            }}></TextField>
          </Grid>

          <Grid item sx={{width: "90%", display: "flex", justifyContent: "space-between"}}>
            <TextField id="formEmail" label="E-mail" variant="filled" sx={{
              width: "100%",
              marginTop: 5,
              backgroundColor: "white.main"
            }}></TextField>
          </Grid>

          <Grid item sx={{width: "90%", display: "flex", justifyContent: "space-between"}}>
            <TextField id="formMessage" label="Escribe aquí tu mensaje..." variant="filled" multiline rows={4} sx={{
              width: "100%",
              marginTop: 5,
              backgroundColor: "white.main",
            }}></TextField>
          </Grid>

          <Button variant="contained" type="submit" sx={{
            width: 140,
            height: 50,
            display: "flex", 
            alignItems: "center",
            marginTop: 6,
            borderRadius: 2,
            fontFamily: "Open Sans",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            color: "white.main",
            backgroundColor: "black.hover",
            boxShadow: "button",
            '&:hover': {
              backgroundColor: "black.main"
            }
          }}> Enviar </Button>
        </FormControl>
      </Grid>
    </Container>
  )
}