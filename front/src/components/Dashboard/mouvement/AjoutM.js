import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Dashboard from "../Dashboard";

import axios from 'axios';

export class AjoutM extends React.Component {
  // disconnect = () => {
  //   API.logout();
  //   window.location = "/";
  // };

  constructor(props) {
    super(props);
    this.onChangenumFacture = this.onChangenumFacture.bind(this);
    this.onChangefournisseur = this.onChangefournisseur.bind(this);
    this.onChangereference = this.onChangereference.bind(this);
    this.onChangenombreE = this.onChangenombreE.bind(this);
    this.onChangenombreS = this.onChangenombreS.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      numFacture: '',
      fournisseur: '',
      reference: '',
      nombreE: '',
      nombreS: '',
      tab: {} 

    };
  }
  onChangenumFacture(e) {
    this.setState({
      numFacture: e.target.value
    });
    /* console.log('====================================');
    console.log('chifre', this.state.numFacture);
    console.log('===================================='); */
  }
  onChangefournisseur(e) {
    this.setState({
      fournisseur: e.target.value
    })  
  }
  onChangereference(e) {
    this.setState({
      reference: e.target.value
    })
  }
  onChangenombreE(e) {
    this.setState({
      nombreE: e.target.value
    })
  }
  onChangenombreS(e) {
    this.setState({
      nombreS: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      numFacture: this.state.numFacture,
      fournisseur: this.state.fournisseur,
      reference: this.state.reference,
      nombreE: this.state.nombreE,
      nombreS: this.state.nombreS,
    };
    axios.post('http://localhost:8800/entrer', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      numFacture: "",
      fournisseur: "",
      reference: "",
      nombreE: "",
      nombreS: ""
    })
  }



  ajouter() {
    return (
      <form >
      <div className="form-group">
          <label>numFacture:  </label>
          <input 
            type="text" 
            className="form-control" 
            value={this.state.numFacture}
            onChange={
              this.onChangenumFacture}
            />
            {
            console.log("this.state.numFacture == ", this)}
      </div>
      <div className="form-group">
          <label>fournisseur: </label>
          <input type="text" 
            className="form-control"
            value={this.state.fournisseur}
            onChange={this.onChangefournisseur}
            />
      </div>
      <div className="form-group">
          <label>reference: </label>
          <input type="text" 
            className="form-control"
            value={this.state.reference}
            onChange={this.onChangereference}
            />
      </div>
      <div className="form-group">
          <label>nombreE: </label>
          <input type="text" 
            className="form-control"
            value={this.state.nombreE}
            onChange={this.onChangenombreE}
            />
      </div>
      <div className="form-group">
          <label>nombreS: </label>
          <input type="text" 
            className="form-control"
            value={this.state.nombreS}
            onChange={this.onChangenombreS}
            />
      </div>
      <div className="form-group">
          <input type={this.liste()} value="Register Business" className="btn btn-primary"/>
      </div>
  </form>
      )
  }

  liste() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              {console.log("this.state.reference ==== " , this.state.reference)}
              
            this.tab.numFacture
            </td>
            <td>
            obj.fournisseur
            </td>
            <td>
            obj.reference
            </td>
            <td>
            obj.nombreE
            </td>
            <td>
            obj.nombreS
            </td>
          </tr>
        </tbody>
        
      </table>
      )
  }

  render() {
    return (
      <div className="container-fluid">
        
        <NavBar />
        <div className="row Dashboard">
          <div className="col-md-2">
            <Dashboard />
          </div>
          <div className="col-md-5">

            {this.ajouter()}
          </div>
          <div className="col-md-4">

            {this.liste()}
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}
