import React from "react";

//import API from "../../utils/API";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

export class Fournisseur extends React.Component {
  // disconnect = () => {
  //   API.logout();
  //   window.location = "/";
  // };
  render() {
    return (

      <div className="container-fluid">
        
        <NavBar />
        <div className="row Dashboard">
          <div className="col-md-2">
            <Dashboard />
          </div>
          <div className="col-md-6">

            fournisseur
          </div>
        </div>
        <Footer />

      </div>

    );
  }
}
