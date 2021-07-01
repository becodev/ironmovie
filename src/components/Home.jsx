import React, { useContext, useState, useEffect } from "react";
import CarouselComponent from "./CarouselComponent";
import MovieItem from "./MovieItem";
import { DataContext } from "../context/DataProvider";

const Home = (props) => {
  const { response } = useContext(DataContext);
  const [homeMovie, setHomeMovie] = useState();
  const homeMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=753712b78a942c2223e77095da519016&language=es`;
    const res = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setHomeMovie(data.results);
  };

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

  useEffect(() => {
    homeMovies();
    if (response.length !== 0) {
      props.history.push("/search");
    }
  }, [response]);
  return (
    <>
      <CarouselComponent />
      <div className="container movies">{movieList()}</div>
    </>
  );
};

export default Home;
