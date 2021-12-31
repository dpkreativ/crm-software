const Search = ({ placeholder = "Search", searchName, searchId }) => {
  return (
    <div className="mx-5 p-2 border-2 border-primary-100 rounded-xl hover:border-primary-200 hover:shadow">
      <input
        type="search"
        name={searchName}
        id={searchId}
        placeholder={placeholder}
        className="outline-none w-full bg-transparent"
      />
    </div>
  );
};

export default Search;
