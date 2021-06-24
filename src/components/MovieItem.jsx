import React from "react";
import { Link } from "react-router-dom";

const MovieItem = () => {
  return (
    <div className="card" style={{ width: "100%" }}>
      <img
        className="card-img-top card-img--height"
        src={
          poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultPoster
        }
        alt="poster"
      />
      <div className="card-body">
        <Link to={`/movie/${item.id}/detail`} className="card-title">
          {item.title}
        </Link>
        <div className="card-text">Рейтинг: {item.vote_average}</div>
        <div className="card-favorite-watchlist">
          <i className="material-icons" name="favorite" onClick={handleMark}>
            {favorite ? "star" : "star_border"}
          </i>
          <i className="material-icons" name="watchlist" onClick={handleMark}>
            {watchlist ? "bookmark" : "bookmark_border"}
          </i>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
