import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const { backdrop_path, original_title, vote_average, id } = props;

  const star = {
    size: 30,
    value: vote_average / 2,
    edit: false,
    count: 5,
  };
  return (
    <div className="card" style={{ width: "100%" }}>
      <img
        className="card-img-top card-img--height"
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt="poster"
      />
      <div className="card-body">
        <Link to={`/movie/${id}/detail`} className="card-title">
          {original_title}
        </Link>
        <div className="card-text">
          <ReactStars {...star} />
        </div>
        <div className="card-favorite-watchlist"></div>
      </div>
    </div>
  );
};

export default MovieItem;
