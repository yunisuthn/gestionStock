import React, { Component } from "react";
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
// MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
// import { Link } from 'react-router-dom'

class NavbarPage extends Component {
state = {
  isOpen: false
};

constructor(props) {
    super(props);
    this.state = {
        collapse: false,
    };
    this.onClick = this.onClick.bind(this);
}

onClick() {
    this.setState({
        collapse: !this.state.collapse,
    });
}

render() {
  return (
    <header>
      <div className="site">
        <span className="sitesoratr">
          <center> GESTIONNEZ VOTRE MAGASIN DU MOTO ICI</center>
        </span>
        {/* <Link to="/connecter" className='dashbrd'>se connecter</Link> */}
      </div>
    </header>
  );
  }
}

export default NavbarPage;

