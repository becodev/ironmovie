import React, { useState, createContext } from "react";
import CallApi from "../api/api";

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
  const [movies, setMovies] = useState(null);

  const getTrending = async () => {
    CallApi.get(`/trending/all/day`, {
      params: {},
    }).then((data) => setMovies(data.results));
  };

  const movieInfo = async (id) => {
    CallApi.get(`/movie/${id}`, {
      params: {},
    }).then((data) => setInfo(data));
  };

  const getGenres = async () => {
    CallApi.get(`/genre/movie/list`, {
      params: {},
    }).then((data) => setGenres(data.genres));
  };

  const homeMovies = async () => {
    CallApi.get(`/discover/movie`, {
      params: { with_genres: genreSelected },
    }).then((data) => setHomeMovie(data.results));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    setFormSent(true);

    if (!search) {
      setError(true);
      return null;
    }

    const res = await CallApi.get(`/search/movie`, {
      params: { query: search },
    });
    res && res.results.length === 0 ? setError(true) : setError(false);
    setResponse(res.results);
    setSearch("");
    setFormSent(false);
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
        getTrending,
        movies,
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
