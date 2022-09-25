import { Box } from "@mui/material"
import { HomePage, ProfilePage, StudiesPage, ExperiencePage, PortfolioPage, ContactPage } from "./"

export const LandingPage = ({language, textData}) => {
  return (
    <Box>
      <Box id="home">
        <HomePage textData={textData} />
      </Box>
      <Box id="profile">
        <ProfilePage textData={textData} />
      </Box>
      <Box id="studies">
        <StudiesPage language={language} textData={textData} />
      </Box>
      <Box id="experience">
        <ExperiencePage language={language} textData={textData} />
      </Box>
      <Box id="portfolio">
        <PortfolioPage language={language} textData={textData} />
      </Box>
      <Box id="contact">
        <ContactPage textData={textData} />
      </Box>
    </Box>
  )
}