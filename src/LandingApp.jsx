import { useState } from "react";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPage";
import {LanguageData} from "./database/LanguageData"
import { AppTheme } from "./themes/AppTheme";

export function LandingApp() {
  let textData = {};
  let lang;

  window.clientInformation.language.includes("es") ? lang="spanish" : lang="english";
  
  const [language, setLanguage] = useState(lang);

  LanguageData.map((text) => (
    language === "spanish" ? textData = text.es : textData = text.en
  ))

  return (
    <AppTheme>
      <NavBar language={language} setLanguage={setLanguage} textData={textData} />
      <LandingPage language={language} textData={textData} />
      <Footer />
    </AppTheme>
  )
}