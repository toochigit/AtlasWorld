import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

function CountryCard({ country }) {
    return (
        <div className="country-card-wrapper">
            <FavoriteButton country={country} />
            <Link to={`/country/${country.cca3}`} className="country-card">
                <img
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                    className="country-card-flag"
                />
                <div className="country-card-body">
                    <h2 className="country-card-title">{country.name.common}</h2>
                    <div className="country-card-info">
                        <p>
                            <strong>Population:</strong>{' '}
                            {country.population.toLocaleString()}
                        </p>
                        <p>
                            <strong>Region:</strong> {country.region}
                        </p>
                        <p>
                            <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CountryCard;
