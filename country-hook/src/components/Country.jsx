const Country = ({ country, isLoading }) => {
  if (!country) return null;

  if (!country.found) return <p>not found...</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h3>{country.data.name.common} </h3>
      <div>capital {country.data.capital[0]} </div>
      <div>population {country.data.population}</div>
      <img src={country.data.flags.png} height="100" alt={country.data.flags.alt} />
    </div>
  );
};

export default Country;
