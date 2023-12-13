import React, { useState } from 'react';

const Header = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };

  return (
    <div className="header">
      <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search..." />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Header;
