
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
  this.onChangenomPiece = this.onChangenomPiece.bind(this);
  this.onChangeprixUnit = this.onChangeprixUnit.bind(this);
  this.onChangenbStock = this.onChangenbStock.bind(this);
  this.onChangestockMin = this.onChangestockMin.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  //this.handle = this.handle.bind(this);
      this.state = {
      nomPiece: '',
      prixUnit: '',
      nbStock: '',
      stockMin: ''

    };
    // this.onChange = this.onChange.bind(this)
    // this.handle = this.handle.bind(this);
  }
  onChangenomPiece(e) {
    this.setState({
      nomPiece: e.target.value
    });
  }
  onChangeprixUnit(e) {
    this.setState({
      prixUnit: e.target.value
    })  
  }
  onChangenbStock(e) {
    this.setState({
      nbStock: e.target.value
    })
  }
  onChangestockMin(e) {
    this.setState({
      stockMin: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nomPiece: this.state.nomPiece,
      prixUnit: this.state.prixUnit,
      nbStock: this.state.nbStock,
      stockMin: this.state.stockMin
    };
    axios.post('http://localhost:8800/article', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nomPiece: "",
      prixUnit: "",
      nbStock: "",
      stockMin: ""
    })
  }




  componentDidMount() {
    console.log('this.props.location.pathname', localStorage.id);
  }

  render() {
    return (


      <div className="container-fluid">
        <NavBar/>
          <div className="row Dashboard">
            <div className="col-md-2">
              <Dashboard/>
            </div>
            <div className="col-md-6">

              <div style={{ marginTop: 10 }}>
                    <h3>Add New Business</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>nomPiece:  </label>
                            <input 
                              type="text" 
                              className="form-control" 
                              value={this.state.nomPiecee}
                              onChange={this.onChangenomPiece}
                              />
                        </div>
                        <div className="form-group">
                            <label>prixUnit: </label>
                            <input type="text" 
                              className="form-control"
                              value={this.state.prixUnit}
                              onChange={this.onChangeprixUnit}
                              />
                        </div>
                        <div className="form-group">
                            <label>nbStock: </label>
                            <input type="text" 
                              className="form-control"
                              value={this.state.nbStock}
                              onChange={this.onChangenbStock}
                              />
                        </div>
                        <div className="form-group">
                            <label>stockMin: </label>
                            <input type="text" 
                              className="form-control"
                              value={this.state.stockMin}
                              onChange={this.onChangestockMin}
                              />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Register Business" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>

              </div>
            </div>
        <Footer/>
      </div>
    );
  }
}

