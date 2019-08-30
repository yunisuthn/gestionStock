

import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import moto from '../DSC_0377a.JPG';
export class Acceuil extends React.Component {
  
  render() {
    return (
      <div>
        <div className = ''>
          <NavBar/>  
        </div><img src={moto} 
     width="100%"
     height="auto"/>
        <div className = ''>
         {/*  <img className = 'moto' src={moto} alt="Logo" /> */}
          <div className = 'soratraA'>
            Vous êtes une magasin du moto, ce site fait pour vous. Vous pouvez gestionnez votre stock. 
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}





/* import React from "react";
export class Acceuil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
} */