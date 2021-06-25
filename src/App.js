import React from "react";
import CallApi from "./api/api";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import DataProvider from "./context/DataProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <DataProvider>
        <Menu />
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </DataProvider>
    </Router>
  );
}

export default App;
