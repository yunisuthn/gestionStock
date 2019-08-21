import React from "react";

//import API from "../../utils/API";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

export class Mouvement extends React.Component {
  // disconnect = () => {
  //   API.logout();
  //   window.location = "/";
  // };
  render() {
    return (
      <div className="container-fluid">
        <NavBar/>
          <div class="row Dashboard">
            <div class="col-md-3">
              <Dashboard/>
            </div>
            <div class="col-md-9">
              Mouvement
            </div>
          </div>
        <Footer/>


   
      </div>
    );
  }
}
