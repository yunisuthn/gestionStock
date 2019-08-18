import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

import logo from '../moto.jpg'; 

class Admin extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <header>
    <MDBNavbar color="red"  className='nav' dark expand="md">{/* color="default-color" */}
        <MDBNavbarBrand className="nav1 row" href="/">
          <div className='col-md-6'>
            <img className = 'logo' src={logo} alt="Logo" />
          </div>
          <div className='roulez  col-5 col-md-6'>roulez plus vite</div>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
                <MDBNavItem className='MDBNavLink'>
                    <MDBNavLink to="/connecter" className='dashbrd'>Admin</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>




 
      </header>
    );
  }
}

export default Admin;


