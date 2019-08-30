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
          <center> GEREZ VOTRE MAGASIN DU MOTO ICI</center>
        </span>

        <div class="rectangle1"></div>
        <div class="rectangle"></div>
        <div class="rectangle2"></div>
        {/* <Link to="/connecter" className='dashbrd'>se connecter</Link> */}
      </div>
    </header>
  );
  }
}

export default NavbarPage;





/* import React, { Component } from "react";
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
// MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";


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
        <div className="site">yunisupiece.herokuapp.com</div>
        <div className="rectangle1"></div>
        <div className="rectangle"></div>
        <div className="rectangle2"></div>
    </header>
  );
  }
}

export default NavbarPage;

 */