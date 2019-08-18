import React from "react";
import { Button } from "react-bootstrap";

import logo from '../moto.jpg'; 
import API from "../../utils/API";

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
      <div className="Dashboard">
        <ul class="nav flex-column ul">
          <li class="nav-item">
            <img className = 'logo1' src={logo} alt="Logo" />
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/stock">Stock</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <button onClick={this.disconnect} block  type="submit">
          Se déconnecter
        </button>
      </div>
    );
  }
}
