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
    this.liste = this.liste.bind(this);

    this.state = {
      numFacture: '',
      fournisseur: '',
      reference: '',
      nombreE: '',
      nombreS: '',
      tab: [] 

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

  liste(e) {
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
  
  onSubmit(e) {
    e.preventDefault();
    console.log("this.state.reference ==== ", this.state.numFacture);
    document.getElementById("td1").innerHTML = this.state.numFacture;
    document.getElementById("td2").innerHTML = this.state.fournisseur;
    document.getElementById("td3").innerHTML = this.state.reference;
    document.getElementById("td4").innerHTML = this.state.nombreE;
    document.getElementById("td5").innerHTML = this.state.nombreS;
    
    this.tab = {
      numFacture: this.state.numFacture,
      fournisseur: this.state.fournisseur,
      reference: this.state.reference,
      nombreE: this.state.nombreE,
      nombreS: this.state.nombreS

    }

    localStorage.setItem('myData', localStorage.myData+JSON.stringify(this.tab));
    
    console.log("localStorage.myData === ", localStorage.myData);
    
    this.setState({
      numFacture: "",
      fournisseur: "",
      reference: "",
      nombreE: "",
      nombreS: ""
    })

  }
  render() {

    // var users = this.state.users.map(function(user) {
    //   return (
    //     <tr onClick={this.handleClick}>
    //       <td>{user.name}</td>
    //       <td>{user.age}</td>
    //       <td></td>
    //     </tr>
    //   );
    // });
    return (
      <div className="container-fluid">
        
        <NavBar />
        <div className="row Dashboard">
          <div className="col-md-2">
            <Dashboard />
          </div>
          <div className="col-md-5">

            <form onSubmit={this.onSubmit} >
              <div className="form-group">
                  <label>numFacture:  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.numFacture}
                    onChange={
                      this.onChangenumFacture}
                    />
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
                <input type="submit" value="Register Business" className="btn btn-primary"/>
              </div>
            </form>
          </div>
          
          <div className="col-md-4 liste">
            <table>
              <tbody>
                <tr>
                  <td id="td1">
                  </td>
                  <td id="td2">
                    
                  </td>
                  <td id="td3">
                  </td>
                  <td id="td4">
                  </td>
                  <td id="td5">
                  </td>
                </tr>
              </tbody>
              
            </table>
                    {/*this.liste()*/}
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}
