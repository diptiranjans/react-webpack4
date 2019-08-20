import React, { Component } from "react";
import { Switch, Router, Route, Link } from "react-router-dom";
import { history } from "../_helpers";

import "./App.css";

function About() {
  return <span>About</span>;
}

function Home() {
  return <span>Home</span>;
}

function Contact() {
  return <span>contact</span>;
}

function Test() {
  return <span>Test</span>;
}

function NoMatch() {
  return <span>No Match</span>;
}

export class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/contact">Contact</Link>
          <br />
          <Link to="/test">Test</Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/test" exact component={Test} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}
