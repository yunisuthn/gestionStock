import React from 'react';

import logo from './exam.png'; 
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
//import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends React.Component {
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
        return (<header>
            <MDBNavbar className='nav' dark expand="md">{/* color="default-color" */}
                <MDBNavbarBrand className="nav1 row" href="/">
                   <img className = 'logo col-md-2' src={logo} alt="Logo" />{/* </strong> */}
                    <div className='cuisine  col-5 col-md-6'>cuisiniez plus</div>
                    <div className='format col-md-1'> formation pour vous</div>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem className='MDBNavLink'>
                            <MDBNavLink to="/connect" className='dashbrd'>Admin</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </header>

        );
    }
}

export default Navbar;