import { useEffect, useState } from "react";

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);
  console.log(name);
  useEffect(() => {});

  return country;
};

export const useField = (type = "text") => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};
