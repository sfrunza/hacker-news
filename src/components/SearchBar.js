import React from "react";

const SearchBar = ({ handleSearch, query }) => {
  return (
    <div className="search-bar">
      <h3>Hacker News</h3>
      <div className="input-container">
        <input
          autoFocus
          className="input"
          placeholder="Search stories by title, url or author"
          onChange={(e) => handleSearch(e.target.value)}
          value={query}
        />
      </div>
    </div>
  );
};

export default SearchBar;
