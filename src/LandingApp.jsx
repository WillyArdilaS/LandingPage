import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPage";
import { AppTheme } from "./themes/AppTheme";

export function LandingApp() {
  return (
    <AppTheme>
      <NavBar />
      <LandingPage />
      <Footer />
    </AppTheme>
  )
}