import Country from "./components/Country";
import Search from "./components/Search";
import { useCountry } from "./hooks";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("text");
  const country = useCountry(name);

  const handleSearch = (name) => setName(name);

  return (
    <main>
      <Search onSearch={handleSearch} name={name} />
      <Country country={country} />
    </main>
  );
};

export default App;
