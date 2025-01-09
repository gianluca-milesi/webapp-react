//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout.jsx"
import BlankLayout from "./layouts/BlankLayout.jsx"
//Pages
import HomePage from "./pages/HomePage.jsx"
import MoviePage from "./pages/movies/MoviePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import NotFound from "./pages/NotFound.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route element={<BlankLayout />}>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App