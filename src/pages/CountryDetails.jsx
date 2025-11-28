import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function CountryDetails() {
    const { code } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [borderCountries, setBorderCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`https://restcountries.com/v3.1/alpha/${code}?fields=name,capital,population,region,subregion,flags,cca3,tld,currencies,languages,borders`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Country not found');
                }
                return response.json();
            })
            .then((data) => {
                setCountry(data[0]);

                // Fetch border countries if they exist
                if (data[0].borders && data[0].borders.length > 0) {
                    const borderCodes = data[0].borders.join(',');
                    return fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCodes}&fields=name,cca3`);
                }
                return null;
            })
            .then((response) => {
                if (response) {
                    return response.json();
                }
                return [];
            })
            .then((borderData) => {
                // Ensure borderData is always an array
                const borders = Array.isArray(borderData) ? borderData : [borderData];
                setBorderCountries(borders.filter(Boolean)); // Filter out any null/undefined
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [code]);

    if (loading) {
        return <div className="loading">Loading country details...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!country) {
        return <div className="error">Country not found</div>;
    }

    const nativeName = country.name?.nativeName
        ? Object.values(country.name.nativeName)[0]?.common
        : country.name?.common || 'N/A';

    const currencies = country.currencies
        ? Object.values(country.currencies)
            .map((curr) => curr.name)
            .join(', ')
        : 'N/A';

    const languages = country.languages
        ? Object.values(country.languages).join(', ')
        : 'N/A';

    return (
        <div className="container country-details">
            <button className="back-button" onClick={() => navigate(-1)}>
                <span>←</span>
                <span>Back</span>
            </button>

            <div className="details-content">
                <img
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                    className="details-flag"
                />

                <div className="details-info">
                    <h2>{country.name.common}</h2>

                    <div className="details-columns">
                        <div className="details-column">
                            <p>
                                <strong>Native Name:</strong> {nativeName}
                            </p>
                            <p>
                                <strong>Population:</strong> {country.population.toLocaleString()}
                            </p>
                            <p>
                                <strong>Region:</strong> {country.region}
                            </p>
                            <p>
                                <strong>Sub Region:</strong> {country.subregion || 'N/A'}
                            </p>
                            <p>
                                <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
                            </p>
                        </div>

                        <div className="details-column">
                            <p>
                                <strong>Top Level Domain:</strong> {country.tld?.[0] || 'N/A'}
                            </p>
                            <p>
                                <strong>Currencies:</strong> {currencies}
                            </p>
                            <p>
                                <strong>Languages:</strong> {languages}
                            </p>
                        </div>
                    </div>

                    {borderCountries.length > 0 && (
                        <div className="border-countries">
                            <h3>Border Countries:</h3>
                            <div className="border-buttons">
                                {borderCountries.map((borderCountry) => (
                                    <Link
                                        key={borderCountry.cca3}
                                        to={`/country/${borderCountry.cca3}`}
                                        className="border-button"
                                    >
                                        {borderCountry.name.common}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;
