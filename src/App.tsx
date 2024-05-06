import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Contato } from "./pages/Contato/Contato"
import { Home } from "./pages/Home/Home"
import { Sobre } from "./pages/Sobre/Sobre"
import { GlobalStyle } from "./styles/globalStyles"
import { Route, Routes } from "react-router-dom"

function App() {  // TEM ALGO EM ALGUM LUGAR FAZENDO A APLICAÇÃO CARREGAR 2X [teste com log]
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contato" element={<Contato />}/>
      <Route path="/sobre" element={<Sobre />}/>
    </Routes> 
    <Footer />
    <GlobalStyle />
    </>
  )
}

export default App
