import React, { Component } from "react";
import { connect } from "react-redux";

// Writing a class based component instead of a function based one
// because we expect to have a few helper functions for deciding what to render in the header

// We don't need to make use of component level state here so not necessary to write a function component

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      // Don't want to return anything while figuring out what auth is set to
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
