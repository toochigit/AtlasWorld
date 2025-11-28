function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            <span className="theme-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
            <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
    );
}

export default ThemeToggle;
