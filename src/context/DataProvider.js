import React, { useState, createContext } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [homeMovie, setHomeMovie] = useState();
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState([]);
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState(28);
  const [info, setInfo] = useState({});

  const movieInfo = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=753712b78a942c2223e77095da519016&language=es`;
    const res = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setInfo(data);
  };

  const getGenres = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=753712b78a942c2223e77095da519016&language=es`;
    const res = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setGenres(data.genres);
  };

  const homeMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=753712b78a942c2223e77095da519016&language=es&with_genres=${genreSelected}`;
    const res = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setHomeMovie(data.results);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    if (!search) {
      setError(true);
      return null;
    }

    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=753712b78a942c2223e77095da519016&language=es`;
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
        getGenres,
        setSearch,
        homeMovies,
        setGenreSelected,
        movieInfo,
        info,
        homeMovie,
        genres,
        search,
        response,
        formSent,
        error,
        genreSelected,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
