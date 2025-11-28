import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('atlasworld-favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('atlasworld-favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (country) => {
        setFavorites(prev => [...prev, country]);
    };

    const removeFavorite = (countryCode) => {
        setFavorites(prev => prev.filter(c => c.cca3 !== countryCode));
    };

    const isFavorite = (countryCode) => {
        return favorites.some(c => c.cca3 === countryCode);
    };

    const toggleFavorite = (country) => {
        if (isFavorite(country.cca3)) {
            removeFavorite(country.cca3);
        } else {
            addFavorite(country);
        }
    };

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite,
            removeFavorite,
            isFavorite,
            toggleFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within FavoritesProvider');
    }
    return context;
}
