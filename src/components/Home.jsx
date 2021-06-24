import React from "react";
import CarouselComponent from "./CarouselComponent";
import Genres from "./Genres";
import Menu from "./Menu";
import MovieItem from "./MovieItem";

const Home = () => {
  return (
    <>
      <Menu />
      <CarouselComponent />
      <MovieItem />
      <Genres />
    </>
  );
};

export default Home;
