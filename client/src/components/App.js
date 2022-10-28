import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>New Survey</h2>;

// class based so we can get lifecycle method which will
// be auto called when this component is rendered
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        {/* Can only take one child inside so using one div */}
        <BrowserRouter>
          {/* container class name required by materialize css */}
          <div className="container">
            <Header />
            {/* exact prop makes sure route is only ever "/" to show Landing */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
