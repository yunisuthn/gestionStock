import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <header>
   
<div class="site">yunisupiece.herokuapp.com</div>
<div class="rectangle1"></div>
<div class="rectangle"></div>
<div class="rectangle2"></div>
    </header>
  );
  }
}

export default NavbarPage;



/* 
<MDBNavbar color="red" dark expand="md" className="navbar">
<MDBNavbarBrand>
  <img className = 'logo col-md-2' src={logo} alt="Logo" />
  <div className='cuisine  col-5 col-md-6'>roulez plus vte</div>
</MDBNavbarBrand>
<MDBNavbarToggler onClick={this.toggleCollapse} />
<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
  <MDBNavbarNav left>
    <MDBNavItem active>
      <MDBNavLink to="#!">Home</MDBNavLink>
    </MDBNavItem>
    <MDBNavItem>
      <MDBNavLink to="#!">Features</MDBNavLink>
    </MDBNavItem>
    <MDBNavItem>
      <MDBNavLink to="#!">Pricing</MDBNavLink>
    </MDBNavItem>
    <MDBNavItem>
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <div className="d-none d-md-inline">Dropdown</div>
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default">
          <MDBDropdownItem href="#!">Action</MDBDropdownItem>
          <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
          <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
          <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavItem>
  </MDBNavbarNav>
  <MDBNavbarNav right>
    <MDBNavItem>
      <MDBNavLink className="waves-effect waves-light" to="#!">
        <MDBIcon fab icon="twitter" />
      </MDBNavLink>
    </MDBNavItem>
    <MDBNavItem>
      <MDBNavLink className="waves-effect waves-light" to="#!">
        <MDBIcon fab icon="google-plus-g" />
      </MDBNavLink>
    </MDBNavItem>
    <MDBNavItem>
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <MDBIcon icon="user" />
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default">
          <MDBDropdownItem href="#!">Action</MDBDropdownItem>
          <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
          <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
          <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavItem>
  </MDBNavbarNav>
</MDBCollapse>
</MDBNavbar> */