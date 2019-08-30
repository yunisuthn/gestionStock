import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from '../../utils/API';

import Navbar from '../componentsExt/NavBar';
import Footer from '../componentsExt/Footer';

import { MDBContainer, MDBCol } from 'mdbreact';

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            email: "",
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
            password: this.state.password
        }
        API.signup(_send).then(function (data) {
            //localStorage.setItem('token', data.data.token);
            localStorage.setItem('id', data.data.id);
            console.log('====================================');
            console.log('id ==== ', data.data.id);
            console.log('====================================');
            if (!data.data.id) {
                window.location = '/stock'
            } else {
                window.location = '/signup'
                document.getElementById("error").innerHTML = "Email ou mot de passe incorrect !"
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
                    <div className="Login1">
                        <MDBContainer>
                            <MDBCol className='center-block' >
                                <FormGroup className='row' controlId="nom" bsSize="large">
                                    <FormLabel className='couleur'>Nom</FormLabel>
                                    <FormControl autoFocus className=' ' type="text" value={this.state.nom} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup className='row' controlId="prenom" bsSize="large">
                                    <FormLabel className='couleur '>Prénom</FormLabel>
                                    <FormControl autoFocus className=' ' type="text" value={this.state.prenom} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup className='row' controlId="email" bsSize="large">
                                    <FormLabel className='couleur '>Email</FormLabel>
                                    <FormControl autoFocus className='' type="email" value={this.state.email} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup className='row' controlId="password" bsSize="large">
                                    <FormLabel className='couleur '>Password</FormLabel>
                                    <FormControl className=' ' value={this.state.password} onChange={this.handleChange} type="password" />
                                </FormGroup>
                                <FormGroup className='row' controlId="cpassword" bsSize="large">
                                    <FormLabel className='couleur '>Confirm Password</FormLabel>
                                    <FormControl className=' ' value={this.state.cpassword} onChange={this.handleChange} type="password" />
                                </FormGroup>

                                <FormGroup bsSize="large">
                                    <FormLabel id='error'></FormLabel>
                                </FormGroup>
                                <FormGroup bsSize="large">
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
                </div>
                <Footer />
            </div>
        )
    }
}