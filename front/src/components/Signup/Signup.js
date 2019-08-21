import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utils/API";

import Navbar from "../componentsExt/NavBar";
import Footer from "../componentsExt/Footer";


export class Signup extends React.Component {
  state = {
    email: "",
    nom: "",
    prenom: "",
    password: "",
    cpassword: ""
  };
  send = async () => {
    const { nom, prenom, email, password, cpassword } = this.state;
    if (!nom || nom.length === 0) return;
    if (!prenom || prenom.length === 0) return;
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({ nom, prenom, email, password });
      localStorage.setItem("token", data.token);
      window.location = "/stock";
    } catch (error) {
      //console.error(error);
      document.getElementById("err").value = "email ou mot de passe incorrect"
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    const { nom, prenom, email, password, cpassword } = this.state;
    return (
      <span className="container">
        <Navbar/>  
      <div className="Login">
        <FormGroup controlId="nom" >
          <FormLabel>Nom</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={nom}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="prenom" >
          <FormLabel>Prénom</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={prenom}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email" >
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" >
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="cpassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            value={cpassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup>
        <Button onClick={this.send} block  type="submit">
          Inscription
        </Button>
        </FormGroup>
        <FormLabel id="err"></FormLabel>
      </div>
        <Footer/>

      </span>
    );
  }
}
