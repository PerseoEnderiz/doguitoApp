import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from './pages/Page404';
import Header from './components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';

function App() {
  return (
    <>
      <Router>
        {/* Todo esto permanece en todas las paginas */}
        <Header/>
        {/* Rutas generadas por javascript dinamicamente */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          {/* Pagina creada dinamicamente */}
          <Route path="/posts/:id" element={<Post/>} />
          {/* El asterisco indica que habra rutas anidadas */}
          <Route path="/categoria/:id/*" element={<Categoria/>} />

          {/* paginas que no existen */}
          <Route path="*" element={<Page404/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
