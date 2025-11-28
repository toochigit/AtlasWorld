import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import ThemeToggle from './ThemeToggle';

function Header({ theme, toggleTheme }) {
    const { favorites } = useFavorites();

    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h1>🌍 Where in the world?</h1>
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <Link to="/favorites" className="favorites-link">
                        <span>★ Favorites</span>
                        {favorites.length > 0 && (
                            <span className="favorites-badge">{favorites.length}</span>
                        )}
                    </Link>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
        </header>
    );
}

export default Header;

