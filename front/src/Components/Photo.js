
import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';

import axios from 'axios';
import Image1 from './equipe.jpg';
// import Image2 from './cuisine2.jpeg';
// import Image3 from './cuisine3.png';
// import logo from './exam.png'; 
class Photo extends Component {

    render() {
        return (
            <div className=' mx-auto mt-5'>
                <img className='img imgT' src={Image1} alt="Logo" />
                {/* <img className = 'img imgT' src={Image2} alt="Logo" />
<img className = 'img imgT' src={Image3} alt="Logo" /> */}
            </div>
        );
    }
}

export default Photo;