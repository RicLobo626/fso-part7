import { useEffect, useState } from "react";
import { getCountry } from "../services/countryService";

export const useCountry = (name) => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!name) {
      setCountry(null);
      return;
    }

    const getAndSetCountry = async () => {
      setIsLoading(true);

      try {
        const data = await getCountry(name);
        setCountry({ data, found: true });
      } catch (e) {
        setCountry({ data: null, found: false });
      } finally {
        setIsLoading(false);
      }
    };

    getAndSetCountry();
  }, [name]);

  return { country, isLoading };
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
