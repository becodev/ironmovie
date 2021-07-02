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
      <section className="row">
        {homeMovie.map((mov) => (
          <MovieItem key={mov.id} {...mov} />
        ))}
      </section>
    );
  };

  const handleGenre = (genre) => {
    return (
      <div className="btn-group d-flex flex-wrap justify-content-between">
        {genre.map((gen) => (
          <button
            key={gen.id}
            className="button-genre btn btn-light genre"
            onClick={() => setGenreSelected(gen.id)}
          >
            {" "}
            {gen.name}{" "}
          </button>
        ))}
      </div>
    );
  };

  useEffect(() => {
    getGenres();
    homeMovies();
    if (response.length !== 0) {
      props.history.push("/search");
    }
  }, [response, genreSelected]);

  return (
    <div className="container">
      <CarouselComponent />
      <span className="badge bg-primary mt-2 mb-2">GENEROS</span>
      {handleGenre(genres)}
      {movieList()}
    </div>
  );
};

export default Home;
