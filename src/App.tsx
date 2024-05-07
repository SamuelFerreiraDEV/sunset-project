import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Contato } from "./pages/Contato/Contato"
import { Home } from "./pages/Home/Home"
import { News } from "./pages/News/News"
import { Sobre } from "./pages/Sobre/Sobre"
import { GlobalStyle } from "./styles/globalStyles"
import { createBrowserRouter, Routes, Route } from "react-router-dom"

function App() {  // TEM ALGO EM ALGUM LUGAR FAZENDO A APLICAÇÃO CARREGAR 2X [teste com log]

  const router = createBrowserRouter

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/news/:id" element={<News />} />
    </Routes> 
    <Footer />
    <GlobalStyle />
    </>
  )
}

export default App
