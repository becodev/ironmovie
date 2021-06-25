import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  const [movies, setMovies] = useState(null);
  const [index, setIndex] = useState(0);

  const api = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=753712b78a942c2223e77095da519016&language=es`;
    const res = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setMovies(data.results);
  };
  useEffect(() => {
    api();
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const modal = (movies) => {
    if (!movies) return null;
    return movies.map((film) => {
      const { backdrop_path, title, overview, id } = film;
      return (
        <Carousel.Item key={id}>
          <img
            className="slide d-block w-100"
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt={title}
          />

          <Carousel.Caption className="caption">
            <h3 className="text-item">{title} </h3>
            <p className="text-item"> {overview} </p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };
  return (
    <div className="container">
      <Carousel variant="dark" onSelect={handleSelect}>
        {modal(movies)}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
