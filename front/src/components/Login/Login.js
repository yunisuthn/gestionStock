import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from '../../utils/API';

import Navbar from '../componentsExt/NavBar';
import Footer from '../componentsExt/Footer';
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            email: "",
            password: "",
            redirect: false
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {

        if (this.state.email.length === 0) {
            return;
        }
        if (this.state.password.length === 0) {
            return;
        }
        console.log(', this.state.redirect ==', this.state.email);
        console.log(', this.state.redirect ==', this.state.password);
        API.login(this.state.email, this.state.password).then(function (data) {
            console.log('data ==', data);

            //localStorage.setItem('token', data.data.token, 'id', data.data.id);
            localStorage.setItem('id', data.data.id);
            window.location = '/stock'  
        }, function (error) {
            console.log(error);
            document.getElementById("error").innerHTML = "Email ou mot de passe incorrect !"
            return;
        })

    }

    /* signup = event => {
        window.location = "/signup"
    } */
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return (
          <div>
              <div class=" container-fluid " id='div'>
                  <div class=" row ">
          <Navbar />
          </div>
            <div className="Login">
                <div className=' col-md-8'>
                </div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" className='login' >

                            <FormGroup controlId="email"  bsSize="large">
                                <FormLabel className='couleur'>Email</FormLabel>
                                <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="large">
                                <FormLabel className='couleur'>Password</FormLabel>
                                <FormControl value={this.state.password} onChange={this.handleChange} type="password" />
                            </FormGroup>

                            <FormGroup  bsSize="large">
                                <FormLabel id='error'></FormLabel>
                            </FormGroup>
                            <Button variant="primary"
                                onClick={this.send}
                                className='couleur boutton'
                                type="submit"> 
                                 Connexion
                            </Button>
                            {/* <Button
                                onClick={this.signup}
                                type="submit"
                            >
                                Signup
                            </Button> */}


                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
              <div class=" container-fluid  "  id='div'>
                    <Footer />
                </div> 
            </div>
            </div>
          );
    }
}
/* import React from "react";
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
    console.log('====================================');
    console.log('this.state', this.state);
    console.log('====================================');
    if (!email || email.length === 0) {
      return;
    }
    if (!password || password.length === 0) {
      return;
    }
    try {
      const { data } = await API.login(email, password);
      //localStorage.setItem("token", data.token);
      console.log('====================================');
      console.log('id', data.data.id);
      console.log('====================================');
      localStorage.setItem('id', data.data.id);
      window.location = "/stock";
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