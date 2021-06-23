import React, { useState, useEffect } from "react";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [current, setCurrent] = useState(0);

  const api = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=753712b78a942c2223e77095da519016`;
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

  const handlePrev = () => {
    let prev = current - 1;
    setCurrent(prev);
  };

  const handleNext = () => {
    let next = current + 1;
    setCurrent(next);
  };

  const modal = (movies) => {
    if (!movies) return null;
    const { backdrop_path, title, overview } = movies[current];
    return (
      <div className="carousel-item active">
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          className="d-block w-100"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">{modal(movies)}</div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Home;
