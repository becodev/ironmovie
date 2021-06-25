import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";

const Menu = () => {
  const { handleSubmit, search, setSearch, error, response, formSent } =
    useContext(DataContext);
  useEffect(() => {
    if (formSent && response.length === 0) {
      console.log("no hay resultados");
    }
  }, [response, formSent]);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <h1 className="main-title">ironmovies</h1>
          </a>
          <div className="row">
            <div className="col input-group input-group-sm ">
              <form
                className="needs-validation"
                onSubmit={handleSubmit}
                noValidate
              >
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  className={error ? "form-control is-invalid" : "form-control"}
                  placeholder="Buscar peliculas..."
                  required
                />

                <div className="invalid-feedback">
                  {formSent && response.length === 0
                    ? "No hay resultados"
                    : "Ingrese un termino de busqueda"}
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
