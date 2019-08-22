import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from '../../utils/API';

import Navbar from '../componentsExt/NavBar';
import Footer from '../componentsExt/Footer';

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            email: "",
            specialite: "",
            password: "",
            cpassword: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if (this.state.email.length === 0) {
            return;
        }
        if (this.state.nom.length === 0) {
            return;
        }
        if (this.state.prenom.length === 0) {
            return;
        }
        if (this.state.password.length === 0 || this.state.password !== this.state.cpassword) {
            return;
        }
        var _send = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            password: this.state.password,
            specialite: this.state.specialite
        }
        API.signup(_send).then(function (data) {
            //localStorage.setItem('token', data.data.token);
            localStorage.setItem('id', data.data.id);
            if(!data.data.id){
                window.location = '/stock'
                document.getElementById("error").innerHTML = "Email ou mot de passe incorrect !"
            }else{
                window.location = '/'
            }
            
            // window.location = `/dashboard/${data.data.id}`
        }, function (error) {
            console.log(error);
            return;
        })
    }
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    signin = event => {
        window.location = "/connecter"
    }
    render() {
        return (
            <div>
                <div class=" container-fluid " id='div'>
                    <div class=" row ">
                        <Navbar />
                    </div>
                  <MDBContainer>
                        <MDBCol className='center-block' >
                            <FormGroup className='row' controlId="nom" bsSize="large">
                                <FormLabel className='couleur col-md-2'>Nom</FormLabel>
                                <FormControl autoFocus className=' col-md-4' type="text" value={this.state.nom} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className='row' controlId="prenom" bsSize="large">
                                <FormLabel className='couleur col-md-2'>Prénom</FormLabel>
                                <FormControl autoFocus className=' col-md-4' type="text" value={this.state.prenom} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className='row' controlId="email" bsSize="large">
                                <FormLabel className='couleur col-md-2'>Email</FormLabel>
                                <FormControl autoFocus className=' col-md-4' type="email" value={this.state.email} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className='row' controlId="specialite" bsSize="large">
                                <FormLabel className='couleur col-md-2'>Spécialité</FormLabel>
                                <FormControl autoFocus className=' col-md-4' type="text" value={this.state.specialite} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup className='row' controlId="password" bsSize="large">
                                <FormLabel className='couleur col-md-2'>Password</FormLabel>
                                <FormControl  className=' col-md-4' value={this.state.password} onChange={this.handleChange} type="password" />
                            </FormGroup>
                            <FormGroup className='row' controlId="cpassword" bsSize="large">
                                <FormLabel className='couleur col-md-2'>Confirm Password</FormLabel>
                                <FormControl className=' col-md-4' value={this.state.cpassword} onChange={this.handleChange} type="password" />
                            </FormGroup>

                            <FormGroup  bsSize="large">
                                <FormLabel id='error'></FormLabel>
                            </FormGroup>
                            <FormGroup  bsSize="large">
                            <Button
                                className='couleur boutton'
                                type="submit"
                                onClick={this.send}
                            >
                                Inscription
                            </Button>

                            <Button
                                className='couleur boutton'
                                onClick={this.signin}
                                type="submit"
                            >
                                Se connecter
                            </Button>
                            </FormGroup>
                        </MDBCol>
                </MDBContainer>
            </div>
              <div class=" container-fluid  "  id='div'>
                    <Footer />
                </div> 
            </div>
        )
    }
}

/* import React from "react";
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
      localStorage.setItem("id", data.data.id);
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
 */