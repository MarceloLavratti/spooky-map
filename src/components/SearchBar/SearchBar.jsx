import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {

  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (!query.trim()) return
    onSearch(query)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        id="searchInput"
        placeholder="Pesquise no Spooky Map"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        type="submit"
        id="searchBtn"
        className="material-symbols-outlined"
        onClick={handleSearch}
      >
        search
      </button>
    </div>
  );
};

export default SearchBar;
