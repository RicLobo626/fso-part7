import Country from "./components/Country";
import Search from "./components/Search";
import { useCountry } from "./hooks";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const { country, isLoading } = useCountry(name);

  const handleSearch = (name) => setName(name);

  return (
    <main>
      <Search onSearch={handleSearch} name={name} s />
      <Country country={country} isLoading={isLoading} />
    </main>
  );
};

export default App;
