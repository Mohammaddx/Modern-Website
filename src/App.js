import React from "react";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import {Resume}  from "./Pages/Resume";
import { Portfolio } from "./Pages/portfolio";
import { Contact } from "./Pages/contact";
import Snow from "react-snow-effect";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/index";
function App() {
  return (
    <div className="App">
      <Snow />
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/About Me" component={About} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
