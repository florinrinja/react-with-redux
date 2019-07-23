import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {

  render() {
    const { light } = this.props;
    return (
      <nav className="navbar">
        {light}
      </nav>
    );
  }
}

const mapStateToProps=state=>({
  light:state
});

const NavbarContainer=connect(mapStateToProps)(Navbar);

export default NavbarContainer;
