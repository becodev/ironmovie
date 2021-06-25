import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Card from "./Card";
import MovieItem from "./MovieItem";

const Search = () => {
  const { response } = useContext(DataContext);

  if (!response) return null;

  return (
    <div className="container justify-content-center row mt-4">
      {response.length === 0 ? (
        <h1>No hay resultados</h1>
      ) : (
        response.map((x) => {
          return <MovieItem key={x.id} {...x} />;
        })
      )}
    </div>
  );
};

export default Search;
