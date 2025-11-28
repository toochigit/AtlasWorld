import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import Favorites from './pages/Favorites';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <FavoritesProvider>
      <Router>
        <div className="app">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/country/:code" element={<CountryDetails />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;

