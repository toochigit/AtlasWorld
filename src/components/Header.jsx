import ThemeToggle from './ThemeToggle';

function Header({ theme, toggleTheme }) {
    return (
        <header className="header">
            <div className="container header-content">
                <h1>🌍 Where in the world?</h1>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
        </header>
    );
}

export default Header;
