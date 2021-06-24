import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import logo from "../assets/ironmovies.png";

const Menu = () => {
  const { handleChange, handleSubmit, search } = useContext(DataContext);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#/">
            <h1 className="main-title">ironmovies</h1>
          </a>
          <div className="row">
            <div className="col input-group input-group-sm ">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  value={search}
                  onChange={handleChange}
                  placeholder="Buscar peliculas..."
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
