import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import FilmDetails from './components/FilmDetails';
import AllCharacters from './pages/AllCharacters';
import CharacterDetail from './components/CharacterDetail';
import { GlobalStyles } from './styles/global'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalStyles />
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
