import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import FilterRegion from '../components/FilterRegion';
import CountryCard from '../components/CountryCard';

function Home() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,cca3')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch countries');
                }
                return response.json();
            })
            .then((data) => {
                setCountries(data);
                setFilteredCountries(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let result = countries;

        // Filter by search term
        if (searchTerm) {
            result = result.filter((country) =>
                country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by region
        if (selectedRegion !== 'All') {
            result = result.filter((country) => country.region === selectedRegion);
        }

        setFilteredCountries(result);
    }, [searchTerm, selectedRegion, countries]);

    if (loading) {
        return <div className="loading">Loading countries...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="container">
            <div className="controls">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <FilterRegion
                    selectedRegion={selectedRegion}
                    setSelectedRegion={setSelectedRegion}
                />
            </div>

            {filteredCountries.length === 0 ? (
                <div className="no-results">No countries found matching your criteria.</div>
            ) : (
                <div className="country-grid">
                    {filteredCountries.map((country) => (
                        <CountryCard key={country.cca3} country={country} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
