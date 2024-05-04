import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Contato } from "./pages/Contato/Contato"
import { Home } from "./pages/Home/Home"
import { Sobre } from "./pages/Sobre/Sobre"
import { GlobalStyle } from "./styles/globalStyles"

function App() {
  let content = <Home />;

  switch (window.location.pathname) {
    case "/contato":
      content = <Contato />
      break;
    case "/sobre":
      content = <Sobre />
      break;
    default:
      <Home />
      break;
  }
  
  return (
    <>
    <Header />
    
    {content}
    
    <Footer />
    <GlobalStyle />
    </>
  )
}

export default App