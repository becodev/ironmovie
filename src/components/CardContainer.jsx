import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Card from "./Card";

const CardContainer = () => {
  const { response } = useContext(DataContext);
  if (!response) return null;
  return (
    <div className="justify-content-center row mt-4">
      {response.map((x) => {
        return <Card key={x.id} data={x} />;
      })}
    </div>
  );
};

export default CardContainer;
