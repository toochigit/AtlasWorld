import { useFavorites } from '../context/FavoritesContext';
import CountryCard from '../components/CountryCard';

function Favorites() {
    const { favorites } = useFavorites();

    return (
        <div className="container">
            <h1 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                ★ My Favorite Countries {favorites.length > 0 && `(${favorites.length})`}
            </h1>

            {favorites.length === 0 ? (
                <div className="no-results">
                    <p>You haven't added any favorites yet.</p>
                    <p>Click the ☆ on any country to add it to your favorites!</p>
                </div>
            ) : (
                <div className="country-grid">
                    {favorites.map((country) => (
                        <CountryCard key={country.cca3} country={country} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;
