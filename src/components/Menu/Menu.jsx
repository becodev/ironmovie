import React, { useState } from "react";
import logo from "../../assets/ironmovies.png";

const Menu = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=753712b78a942c2223e77095da519016`;
    const res = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <div className="row">
            <div className="col input-group input-group-sm mb-2">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Buscar pelicula
              </span>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  value={search}
                  onChange={handleChange}
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
