import React, { Component, Fragment } from 'react';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="text-dark text-center mt-4">React-Plate</h1>
        <p className="text-center">A minimal plate</p>
      </Fragment>
    );
  }
}

export default Header;
