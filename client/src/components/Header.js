import React, { Component } from "react";

// Writing a class based component instead of a function based one
// because we expect to have a few helper functions for deciding what to render in the header

// We don't need to make use of component level state here so not necessary to write a function component

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily</a>
          <ul className="right">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
