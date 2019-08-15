import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from '../../utils/API';

import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Bienvenu from '../../Components/Bienvenu'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class Signup extends React.Component {
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
                window.location = '/register'
                document.getElementById("error").innerHTML = "Email ou mot de passe incorrect !"
            }else{
                window.location = '/dashboard'
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
        window.location = "/connect"
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