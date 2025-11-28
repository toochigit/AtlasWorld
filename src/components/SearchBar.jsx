function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
                type="text"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
