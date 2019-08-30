import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default  class Dashboard extends Component {
  render() {
    return (
      <span className="navbar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to='/profil' activeClassName="active">mon profil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/stock' activeClassName="active">stock</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/mouvement'  activeClassName="active">mouvement</NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to='/fournisseur' activeClassName="active">fournisseur</NavLink>
          </li> */}
        </ul>
      </span>
    );
  }
}





/* 
 import React from "react";
import { Link } from 'react-router-dom'

export default class Dashboard extends React.Component {
  render() {
    const { location } = this.props;
    
    const homeClass = location.pathname.match(/^\/active/) ? "active" : "";
    const aboutClass = location.pathname.match(/^\/mouvement/) ? "active" : "";
    const contactClass = location.pathname.match(/^\/fournisseur/) ? "active" : "";
    
    return (
      <div>  
   <nav className="navbar navbar-default navbar-static-top">
    <ul className="nav nav-pills">
      {/* Check the Css section for the selector * /}
      <li className={homeClass}><Link to="/stock" activeClassName="active">Part A</Link></li>
      <li className={aboutClass}><Link to="/mouvement" activeClassName="active">Part B</Link></li>
      <li className={contactClass}><Link to="/fournisseur" activeClassName="active">Part C</Link></li>
    </ul>
  </nav>
        {this.props.children}
  </div> 
    );
  }
}
 */



         {/* <ul className="nav flex-column">
          <li className="nav-item ">
            {/* <a className="nav-link" href="/stock">Stock</a> * /}
            <Link className="nav-link link" to="/stock">Stock</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link"  to="/mouvement">Mouvement</Link>
            {/* <a className="nav-link" href="/mouvement">Entré/Sortie</a> * /}
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/fournisseur">Fournisseur</a> * /}
            <Link className="nav-link link" to="/fournisseur">Fournisseur</Link>
          </li>
        </ul> */}



/* import React, { Component }  from 'react';

import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
class Dashboard extends Component {
      render() {
          return (
        <div className="sidebar-fixed side ">
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/stock" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/fournisseur" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Liste des ateliers
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/mouvement" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Ajouter un atelier
                    </MDBListGroupItem>
                </NavLink>


            </MDBListGroup>
        </div>
    );
          }
}

export default Dashboard; */