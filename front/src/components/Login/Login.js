import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utils/API";

import Navbar from "../componentsExt/NavBar";
import Footer from "../componentsExt/Footer";



export class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  send = async () => {
    const { email, password } = this.state;
    if (!email || email.length === 0) {
      return;
    }
    if (!password || password.length === 0) {
      return;
    }
    try {
      const { data } = await API.login(email, password);
      localStorage.setItem("token", data.token);
      window.location = "/dashboard";
    } catch (error) {
      //console.log('error', error);
      document.getElementById("err").value = "email ou mot de passe incorrect"
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <span className="container">
        <Navbar/>   
          <div className="">
            <div className="col-md-6">
              
            </div>
            <div className="col-md-6">
              <div className="Login">
                <FormGroup controlId="email" className="row" >
                <FormLabel className="col-md-5">Email</FormLabel>
                <FormControl className="col-md-6"
                  autoFocus
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                />
                </FormGroup>
                <FormGroup controlId="password" className="row">
                <FormLabel className="col-md-5" >Password</FormLabel>
                <FormControl className="col-md-6"
                  value={password}
                  onChange={this.handleChange}
                  type="password"
                />
                </FormGroup>
                <FormGroup controlId="password" className="row">
                  <Button onClick={this.send} block  type="submit"   className="col-md-5">
                  Connexion
                  </Button>
                </FormGroup>

                <FormLabel id="err"></FormLabel>
               </div> 
            </div>
          </div>
              
        <Footer/>

      </span>
    );
  }
}



/* 
<FormGroup className="row" >
<Navbar/>
</FormGroup>
<div className=" row Login">
<FormGroup controlId="email" className="row" >
<FormLabel className="col-md-6">Email</FormLabel>
<FormControl className="col-md-6"
  autoFocus
  type="email"
  value={email}
  onChange={this.handleChange}
/>
</FormGroup>
<FormGroup controlId="password" className="row">
<FormLabel className="col-md-6" >Password</FormLabel>
<FormControl className="col-md-6"
  value={password}
  onChange={this.handleChange}
  type="password"
/>
</FormGroup>
<Button onClick={this.send} block  type="submit" className="row col-md-6">
Connexion
</Button>

<FormLabel id="err"></FormLabel>
</div>
<Footer/> */