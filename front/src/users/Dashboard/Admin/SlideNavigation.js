import React, { Component }  from 'react';
import logo from "./exam.png";
import API from '../../../utils/API';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
class SlideNavigation extends Component {
    disconnect = event => {
        API.logout();
        window.location = "/";
      }
      render() {
          return (
        <div className="sidebar-fixed side ">
            <a href="" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/admin" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/liste" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Liste des ateliers
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/ajout" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Ajouter un atelier
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to="/b" activeClassName="activeClass">
                    <MDBListGroupItem  onClick={this.disconnect}>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        Deconnecter
                    </MDBListGroupItem>
                </NavLink>

            </MDBListGroup>
        </div>
    );
          }
}

export default SlideNavigation;