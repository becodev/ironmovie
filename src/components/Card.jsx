import React from "react";

const Card = ({ data }) => {
  const { original_title, overview, poster_path } = data;
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="img-fluid rounded-start"
            alt="..."
          />

          <div className="col-md-4"></div>
          {/* <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{original_title}</h5>
              <p className="card-text">{overview}</p>
             <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Card;
