import { Button, FormControl, Grid, Typography, TextField }  from "@mui/material"
import { Container } from "@mui/system"
import { useState } from "react"

export const ContactPage = ({textData}) => {
   const [name, setName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email ,setEmail] = useState('')
   const [message, setMessage] = useState('')

   const handleSubmit=(e)=>{
      e.preventDefault();
      if(name==="" || lastName==="" || email==="" || message===""){
        alert(textData.contact.alertTextWrong);
      }else{
        alert(textData.contact.alertTextCorrect);
        window.location.href=`mailto:williamardilasanchez@gmail.com?subject=Hola quiero contactarte&body=Nombre%3A${name}%OAApellido%3A${lastName}%OACorreo%3A${email}%OAMensaje%3A${message}%OA`
      }
   }

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
      }}> {textData.contact.title} </Typography>

      <Grid container>
        <FormControl sx={{width: "100%", marginTop: 6, display: "flex", alignItems: "center",}}>
          <Grid item sx={{width: "90%", display: "flex", justifyContent: "space-between"}}>
            <TextField id="formName" className="formField" label={textData.contact.inputText1} variant="filled" value={name} 
            onChange={(e)=>setName(e.target.value)} sx={{
              width: {xs:"45%", md: "40%"},
              backgroundColor: "white.main"
            }}></TextField>

            <TextField id="formLastName" label={textData.contact.inputText2} variant="filled" value={lastName} 
            onChange={(e)=>setLastName(e.target.value)} sx={{
              width: {xs:"45%", md: "40%"},
              backgroundColor: "white.main"
            }}></TextField>
          </Grid>

          <Grid item sx={{width: "90%", display: "flex", justifyContent: "space-between"}}>
            <TextField type="email" id="formEmail" label={textData.contact.inputText3} variant="filled" value={email} 
            onChange={(e)=>setEmail(e.target.value)} sx={{
              width: "100%",
              marginTop: 5,
              backgroundColor: "white.main"
            }}></TextField>
          </Grid>

          <Grid item sx={{width: "90%", display: "flex", justifyContent: "space-between"}}>
            <TextField id="formMessage" label={textData.contact.inputText4} variant="filled" multiline rows={4} value={message} 
            onChange={(e)=>setMessage(e.target.value)} sx={{
              width: "100%",
              marginTop: 5,
              backgroundColor: "white.main",
            }}></TextField>
          </Grid>

          <Button variant="contained" type="button" onClick={handleSubmit} sx={{
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
          }}> {textData.contact.buttonText} </Button>
        </FormControl>
      </Grid>
    </Container>
  )
}