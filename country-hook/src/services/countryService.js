import axios from "axios";

export const getCountry = async (name) => {
  const { data } = await axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/name/${name}`
  );

  return data;
};
