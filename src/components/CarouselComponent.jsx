import React, { useState, useEffect, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const { getTrending, movies } = useContext(DataContext);

  useEffect(() => {
    getTrending();
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
          <Link to={`/movie/${id}`}>
            <img
              className="slide d-block w-100"
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt={title}
            />
          </Link>
          <Carousel.Caption className="caption">
            <h3 className="text-item ">{title} </h3>

            <p className="text-item"> {overview} </p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  };
  return (
    <div className="container p-0">
      <Carousel variant="dark" onSelect={handleSelect}>
        {modal(movies)}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
