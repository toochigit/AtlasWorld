function FilterRegion({ selectedRegion, setSelectedRegion }) {
    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    return (
        <div className="filter-region">
            <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
            >
                {regions.map((region) => (
                    <option key={region} value={region}>
                        {region === 'All' ? 'Filter by Region' : region}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FilterRegion;
