import React, { Component } from "react";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Route } from "react-router-dom";
import Search from "./pages/search.js";
import Saved from "./pages/save";
import NotFound from "./pages/notFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
        <ToastContainer />
        <section className="hero-is-fullheight">
          <div className="head-head">
            <NavBar />
          </div>
          <div className="head-body">
            {/* <Switch> */}
              <Route exact path="/" component={Search} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route path="/not-found" component={NotFound} />
              {/* <Redirect from="/" exact to="/search" /> */}
              {/* <Redirect to="/not-found" /> */}
            {/* </Switch> */}
          </div>
          <div className="head-foot">
            <Footer />
          </div>
        </section>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
