import React, { useContext, useEffect } from "react";
import CarouselComponent from "./CarouselComponent";
import MovieItem from "./MovieItem";
import { DataContext } from "../context/DataProvider";

const Home = (props) => {
  const {
    response,
    getGenres,
    genres,
    homeMovie,
    homeMovies,
    setGenreSelected,
    genreSelected,
  } = useContext(DataContext);

  const movieList = () => {
    if (homeMovie === undefined) return null;
    return (
      <div className="row movie-item">
        {homeMovie.map((mov) => (
          <MovieItem key={mov.id} {...mov} />
        ))}
      </div>
    );
  };

  const handleGenre = (genre) => {
    return genre.map((gen) => (
      <button
        key={gen.id}
        className="button-genre btn btn-light"
        onClick={() => setGenreSelected(gen.id)}
      >
        {" "}
        {gen.name}{" "}
      </button>
    ));
  };

  useEffect(() => {
    getGenres();
    homeMovies();
    if (response.length !== 0) {
      props.history.push("/search");
    }
  }, [response, genreSelected]);
  //
  return (
    <div className="container">
      <CarouselComponent />
      <div className="buttons btn-group d-flex flex-wrap justify-content-between">
        {handleGenre(genres)}
      </div>
      <div className="container movies">{movieList()}</div>
    </div>
  );
};

export default Home;
