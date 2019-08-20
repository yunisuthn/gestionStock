import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
export class Acceuil extends React.Component {
  
  render() {
    return (
      <div>
        <NavBar/>
          
        <div class="rectangle1"></div>
        <div class="rectangle"></div>
        <div class="rectangle2"></div>
        <Footer/>
      </div>
    );
  }
}
