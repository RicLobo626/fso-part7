import axios from "axios";
import { useEffect, useState } from "react";

export const useField = (type = "text") => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => setValue("");

  return {
    type,
    value,
    onChange,
    reset,
  };
};

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const getAndSetResources = async () => {
      const { data } = await axios.get(baseUrl);
      setResources(data);
    };

    getAndSetResources();
  }, []);

  const create = async (body) => {
    const { data } = await axios.post(baseUrl, body);

    setResources(resources.concat(data));

    return data;
  };

  const service = {
    create,
  };

  return [resources, service];
};
