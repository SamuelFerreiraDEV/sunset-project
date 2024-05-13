import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { PageNotFound } from "./components/PageNotFound"
import { NewsProvider } from "./contexts/NewsContext"
import { Delete } from "./pages/Delete/Delete"
import { Home } from "./pages/Home/Home"
import { LandingPage } from "./pages/LandingPage/LandingPage"
import { NewsPage } from "./pages/NewsPage/NewsPage"
import { Publish } from "./pages/Publish/Publish"
import { GlobalStyle } from "./styles/globalStyles"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <NewsProvider>
      <Header />
      <Routes>
        <Route>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/landingpage" element={<LandingPage />}/>
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
