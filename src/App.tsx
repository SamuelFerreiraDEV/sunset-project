import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { PageNotFound } from "./components/PageNotFound"
import { NewsProvider } from "./contexts/NewsContext"
import { Contato } from "./pages/Contato/Contato"
import { Delete } from "./pages/Delete/Delete"
import { Home } from "./pages/Home/Home"
import { NewsPage } from "./pages/NewsPage/NewsPage"
import { Publish } from "./pages/Publish/Publish"
import { Sobre } from "./pages/Sobre/Sobre"
import { GlobalStyle } from "./styles/globalStyles"
import { Routes, Route } from "react-router-dom"

function App() {  // TEM ALGO EM ALGUM LUGAR FAZENDO A APLICAÇÃO CARREGAR 2X [teste com log]

  // const router = createBrowserRouter(  // TENTEI USAR O ROUTERPROVIDER E NÂO CONSEGUI FAZER A TAG <Link> FUNCIONAR COM ELE, E SE USAR <a> TODA A PÁGINA RECARREGA AO CLICAR (teste do contador)
  //   createRoutesFromElements(
  
  //   )
  // )  

  return (
    <NewsProvider>
      <Header />
      <Routes>
        <Route>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/publicacao" element={<Publish />} />
            <Route path="/removerpublicacao" element={<Delete />} />

            <Route path="/news">
              <Route index element={<Home />} />
              <Route path=":id" element={<NewsPage />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Footer />
      <GlobalStyle />
    </NewsProvider>
  )
}

export default App
