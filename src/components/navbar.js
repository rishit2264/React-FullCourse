import React, { Component } from 'react';

class Navbar extends Component {
  state = {}

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            🛒 Shopping Cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;