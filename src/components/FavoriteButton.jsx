import { useFavorites } from '../context/FavoritesContext';

function FavoriteButton({ country, large = false }) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(country.cca3);

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(country);
    };

    return (
        <button
            className={`favorite-button ${large ? 'favorite-button-large' : ''}`}
            onClick={handleClick}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            title={favorite ? "Remove from favorites" : "Add to favorites"}
        >
            {favorite ? '❤️' : '🤍'}
        </button>
    );
}

export default FavoriteButton;
