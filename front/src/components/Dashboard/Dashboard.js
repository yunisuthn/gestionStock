import React from "react";
import { Button } from "react-bootstrap";

import API from "../../utils/API";

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <Button onClick={this.disconnect} block  type="submit">
          Se déconnecter
        </Button>
      </div>
    );
  }
}
