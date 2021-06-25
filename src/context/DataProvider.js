import React, { useState, createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState([]);
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    if (!search) {
      setError(true);
      return null;
    }

    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=753712b78a942c2223e77095da519016&language=en`;
    const res = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    data && data.results.length === 0 ? setError(true) : setError(false);
    setResponse(data.results);
    setSearch("");
    setFormSent(true);
  };

  return (
    <DataContext.Provider
      value={{
        handleSubmit,
        search,
        setSearch,
        response,
        formSent,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
