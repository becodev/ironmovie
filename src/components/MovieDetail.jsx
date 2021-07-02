import React, { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { DataContext } from "../context/DataProvider";
import { noPoster, imageUrl } from "../constants";

const MovieDetail = (props) => {
  const { id } = props.match.params;

  const { info, movieInfo } = useContext(DataContext);

  useEffect(() => {
    movieInfo(id);
  }, []);

  const { overview, title, poster_path, release_date, runtime } = info;

  return (
    <div className="container movie-detail">
      <div className="row">
        <div className="col-md-5 col-sm-6 col-lg-4 col-xl-3">
          {!poster_path ? (
            <Spinner animation="border" />
          ) : (
            <img
              height={400}
              className=""
              src={!poster_path ? `${noPoster}` : `${imageUrl}${poster_path}`}
              alt={title}
            />
          )}
        </div>
        <div className="col-md-7 col-sm-6 col-lg-6 col-xl-6">
          <h5>{title}</h5>
          <p>{overview}</p>
          <p>
            <span className="fw-bold">Lanzamiento:</span> {release_date}{" "}
          </p>
          <p>
            <span className="fw-bold">Duracion:</span> {runtime} min.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
