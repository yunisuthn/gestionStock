import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';

import { Redirect } from 'react-router-dom'

import API from '../../../utils/API';
class TopNavigation extends Component {
    state = {
        collapse: false,
        redirect: false
      }

      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
    disconnect = event => {  
        if (this.state.redirect) {
            API.logout();
            //window.location = "/";
          return <Redirect to='/' />
        }
      }  
    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (<MDBNavbar className="flexible-navbar" light expand="md" scrolling>
        <MDBNavbarBrand href="/">
            <strong>Cuisinez plus</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick = { this.onClick } />
        <MDBCollapse isOpen = { this.state.collapse } navbar>
           
            <MDBNavbarNav right>
                <MDBNavItem>
                    <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://github.com/yunisuthn/exam" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>GitHub</a>
                </MDBNavItem>
                <MDBNavItem>{this.disconnect()}
                    <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" onClick={this.setRedirect} href="" target="_blank" >
                        Deconnecter
                    </a>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>
            // <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
            //     <div className="flexible-navbar">
            //     <MDBNavbarBrand href="/">
            //         <strong>MDB</strong>
            //     </MDBNavbarBrand>
            //     {/* <MDBNavbarToggler onClick = { this.onClick } /> */}
            //     {/* <MDBCollapse isOpen = { this.state.collapse } navbar  onClick = { this.onClick }> */}
            //         <MDBNavbarNav right>
            //             <MDBNavItem>
            //                 <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://github.com/yunisuthn/exam" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>GitHub</a>
            //             </MDBNavItem>

            //             <MDBNavItem
            //       onClick={this.disconnect}>
            //       <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://github.com/yunisuthn/exam" target="_blank">
                            
            //       Deconnecter</a>
            //             </MDBNavItem>

            //         </MDBNavbarNav>
            //     {/* </MDBCollapse> */}
            // </div>
            // </MDBNavbar> 
        );
    }
}

export default TopNavigation;