import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Genres from './pages/Genres';

function App() {
    return (
      <BrowserRouter basename='/Songify-new/'>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/genres" element={<Genres/> } />
        </Routes>
      </BrowserRouter>
    )
  // }
}

export default App
