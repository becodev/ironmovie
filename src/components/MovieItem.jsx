import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const { backdrop_path, original_title, vote_average, id, release_date } =
    props;

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
        <div className="card-title d-flex justify-content-between">
          <div className="d-inline">
            <h4 className="d-inline">{original_title}</h4>
          </div>
          <div className="d-inline">
            <h6 className="d-inline">
              {release_date && release_date.slice(0, 4)}
            </h6>
          </div>
        </div>

        <div className="card-text">
          <ReactStars {...star} />
        </div>
        <div className="btn btn-light d-flex justify-content-center">
          {" "}
          <Link to={`/movie/${id}/detail`} className="">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
