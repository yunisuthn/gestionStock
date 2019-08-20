
import React from 'react';

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import NavBar from "../NavBar";
import Footer from "../Footer";
import Dashboard from "../Dashboard";


import axios from 'axios';

import { Link } from 'react-router-dom';

export class AjoutS extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nomPiece: '',
      prixUnit: '',
      nbStock: '',
      stockMin: ''

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleUploadImage(ev) {

    ev.preventDefault();

    const data = new FormData();
    data.append('nomPiece', this.state.nomPiece);
    data.append('prixUnit', this.state.prixUnit)
    data.append('nbStock', this.state.nbStock);

    data.append('stockMin', this.state.stockMin);
    data.append('user', localStorage.id)



    fetch('http://localhost:8800/article', {
      method: 'POST',
      body: data,
    }).then((response) => {
        console.log('this.response == ', response);
    }).catch(
        console.log('this.response == ', data)

    )
    ;
  }

  componentDidMount() {
    console.log('this.props.location.pathname', localStorage.id);
  }

  render() {
    return (


      <div className="container-fluid">
        <NavBar/>

      {console.log('localstorage: ', localStorage.id)}
          <div className="row Dashboard">
            <div className="col-md-2">
              <Dashboard/>
            </div>
            <div className="col-md-6">


            <MDBContainer className=" margin span">

              <FormGroup className='row ' controlId="nomPiece" bsSize="large">
                <FormLabel className='couleur col-md-4'>Nom Piece:</FormLabel>
                <FormControl autoFocus className=' col-md-4' type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="nomPiece" />
              </FormGroup>

              <FormGroup className='row' controlId="prixUnit" bsSize="large">
                <FormLabel className='couleur col-md-4'>prixUnit:</FormLabel>
                <FormControl type="text" className=' col-md-4' rows="5"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="prixUnit" />
              </FormGroup>

              <FormGroup className='row' controlId="nbStock" bsSize="large">
                <FormLabel className='couleur col-md-4'>nbStock:</FormLabel>
                <FormControl type="text"
                  className=' col-md-4'
                  value={this.state.value}
                  onChange={this.onChange}
                  name="nbStock" />
              </FormGroup>

              <FormGroup className='row' controlId="stockMin" bsSize="large">
                <FormLabel className='couleur col-md-4'>stockMin:</FormLabel>
                <FormControl type="text"
                  className=' col-md-4'
                  value={this.state.value}
                  onChange={this.onChange}
                  name="stockMin" />
              </FormGroup>

              <FormGroup bsSize="large">
                <Button variant="primary" className='couleur boutton'
                  onClick={this.handleUploadImage}
                  type="submit">
                  Ajouter
                      </Button>
              </FormGroup>


            </MDBContainer>
            </div>
          </div>
        <Footer/>


   
      </div>
    );
  }
}

