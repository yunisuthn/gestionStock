import React from "react";

//import API from "../../utils/API";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

export class Profil extends React.Component {
  // disconnect = () => {
  //   API.logout();
  //   window.location = "/";
  // };
  render() {
    return (

      <div className="">

        <NavBar />
        {console.log('localstorage: ', localStorage.id)}
        <div className="row Dashboard">
          <div className="col-md-2">
            <Dashboard />
          </div>
            <span className="">
            <div className="col-md-12 stock ">
              
            </div>
            </span>
        </div>
        <Footer />

</div>

    );
  }
}
