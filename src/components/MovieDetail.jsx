import React, { useState, useEffect } from "react";
import Media from "react-bootstrap/Media";
import { noPoster, imageUrl } from "../constants";

const MovieDetail = (props) => {
  const [info, setInfo] = useState({});
  const { id } = props.match.params;
  const movieInfo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=753712b78a942c2223e77095da519016&language=es`;
    const res = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setInfo(data);
  };

  useEffect(() => {
    movieInfo();
  }, []);

  const { overview, title, poster_path } = info;

  return (
    <div className="container movie-detail">
      <div className="row">
        <div className="col-md-5 col-sm-6 col-lg-4 col-xl-3">
          <img
            height={400}
            className=""
            src={!poster_path ? `${noPoster}` : `${imageUrl}${poster_path}`}
            alt={title}
          />
        </div>
        <div className="col-md-7 col-sm-6 col-lg-6 col-xl-6">
          <h5>{title}</h5>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
