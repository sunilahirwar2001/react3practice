import React from 'react';

const SearchInput = ({ onSearch, searchQuery, setSearchQuery }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    onSearch(value); // Pass the search query to the parent component
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
