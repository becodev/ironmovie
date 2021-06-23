import React, { useState, createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState(null);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=753712b78a942c2223e77095da519016&language=en`;
    const res = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setResponse(data.results);
    setFormSent(true);
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <DataContext.Provider
      value={{
        handleChange,
        handleSubmit,
        search,
        setSearch,
        response,
        formSent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
