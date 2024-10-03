import { useField } from "../hooks";

const Search = ({ onSearch }) => {
  const name = useField();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(name.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country-name">
        <input id="country-name" {...name} />
      </label>

      <button>find</button>
    </form>
  );
};

export default Search;
