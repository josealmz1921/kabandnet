import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Layout from './Layout/Layout';

// Pages
import Inicio from './pages/Inicio';
import Media from './pages/Medias';
import Ajustes from './pages/Ajustes';
import Productos from './pages/Productos';
import Paginas from './pages/Paginas';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/admin' element={<Layout/>} >
          <Route index element={<Inicio/>} />
          <Route path='media' element={<Media/>} />
          <Route path='ajustes' element={<Ajustes/>} />
          <Route path='paginas' element={<Paginas/>} />
          <Route path='productos' element={<Productos/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
