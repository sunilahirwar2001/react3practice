import React, { useState, useEffect } from "react";


function SearchFunc() {
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.mfapi.in/mf");
        const data = await response.json();
        setResult(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = result.filter(
      (data) =>
        data.schemeName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filtered.slice(0, 10));
  }, [result, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a mutual fund"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="funds-container">
        <ul>
          {filtered.map((data) => (
            <li key={data.schemeCode}>
              <h3>{data.schemeName}</h3>
              <p>Scheme Code: {data.schemeCode}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchFunc;