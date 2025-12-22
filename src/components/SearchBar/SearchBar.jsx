import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        id="searchInput"
        placeholder="Pesquise no Spooky Map"
      />
      <button
        type="submit"
        id="searchBtn"
        className="material-symbols-outlined"
      >
        search
      </button>
    </div>
  );
};

export default SearchBar;
