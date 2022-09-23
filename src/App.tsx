import { Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/home.page';
import RQSuperHeroesPage from './components/rqsuperheroes.page';
import SuperHeroesPage from './components/superheroes.page';
import Nav from './components/nav.components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
