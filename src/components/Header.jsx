import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Header({ theme, toggleTheme }) {
    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h1>🌍 Where in the world?</h1>
                </Link>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </header>
    );
}

export default Header;
