import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
class Accueil extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8081/article')
            .then(response => {
                //console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    inscrire = (x) => {
        //console.log('cccc == ', x);

        localStorage.setItem('atel', x);
        //console.log('localStorage', localStorage.atel);
        this.props.history.push('/inscrire');
        //window.location = "/inscrire"

    }

    render() {
        return (
            <div>
                <div class=" container-fluid " id='div'>
                    <div class=" row ">
                        <Navbar />
                    </div>
                    <div class="container">
                        <div className='row margin' >
                            {
                                (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                                    return (
                                        // <MDBRow  className='row' >
                                        <div className='col-md-3'>
                                            <MDBCard id='carte' key={obj._id} onClick={() => this.inscrire(obj._id)}>
                                                <MDBCardImage id='' cascade className=" img-fluid" src={'http://localhost:8081/photos/' + obj.photo_profil} alt="pdp" />
                                                <MDBCardBody cascade>
                                                    <MDBCardTitle>{obj.titre}</MDBCardTitle>
                                                    <MDBCardText>{obj.description}</MDBCardText>
                                                    <MDBCardText>DATE :{obj.date}</MDBCardText>
                                                    <MDBCardText>A PARTIR DE {obj.debut} HEURE</MDBCardText>
                                                    <MDBBtn  >
                                                        plus d'information
                                </MDBBtn>
                                                </MDBCardBody>
                                                {/*console.log(obj)*/}
                                            </MDBCard>
                                        </div>
                                        // </MDBRow>
                                    )

                                })) : ('')
                            }
                            {/* {this.carte()} */}
                        </div>
                    </div>
                </div>
                <div class=" container-fluid  " id='div'>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Accueil;
