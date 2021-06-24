import React from "react";
import CallApi from "./api/api";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import DataProvider from "./context/DataProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <DataProvider>
        <Home />

        <Route path="/search" component={CardContainer} />
        <CardContainer />

        <Footer />
      </DataProvider>
    </Router>
  );
}

export default App;
