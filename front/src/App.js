import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
//import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App.jsx';
import PostFrontToBack from './users/Dashboard/postWithUpload_frontToBack';
import { PrivateRoute } from './users/PrivateRoute.js';
import './App.css'

class Appp extends React.Component {
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
      <div>
        <Router>

          <div>
            <header>
              <MDBNavbar className='nav' dark expand="md">{/* color="default-color" */}
                <MDBNavbarBrand href="/">
                  <strong className='couleur'>E-commerce</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav right>
                    {/* <MDBNavItem className='MDBNavLink'>
                      <MDBNavLink to="/">Acceuil</MDBNavLink>
                    </MDBNavItem> */}
                    <MDBNavItem className='MDBNavLink'>
                      <MDBNavLink to="/login" className='couleur'>Dashboard</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
            </header>
            <div className='col-md-6 margin'>
            </div>
            <Switch className='col-md-3 margin'>
              <Route exact path='/' component={App} />
              <PrivateRoute path="/dashboard" component={PostFrontToBack} />

              {/* <PrivateRoute path="/profil" component={ListTous} /> */}
              {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Appp;