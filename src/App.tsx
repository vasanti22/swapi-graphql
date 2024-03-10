import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import FilmDetails from './pages/FilmDetails';
import AllCharacters from './pages/AllCharacters';
import CharacterDetail from './pages/CharacterDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/films/:id" element={ <FilmDetails />} />
            <Route path="/character/:id" element={ <CharacterDetail />} />
            <Route path="/allcharacters" element={ <AllCharacters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
