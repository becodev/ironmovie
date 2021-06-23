import React from "react";
import CallApi from "./api/api";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import DataProvider from "./context/DataProvider";
import "./index.css";

function App() {
  return (
    <DataProvider>
      <Menu />

      <Home />

      <CardContainer />

      <Footer />
    </DataProvider>
  );
}

export default App;
