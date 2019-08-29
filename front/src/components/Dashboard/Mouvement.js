import React from "react";

//import API from "../../utils/API";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

import axios from 'axios';
import {Link} from "react-router-dom"
export class Mouvement extends React.Component {
  // disconnect = () => {
  //   API.logout();
  //   window.location = "/";
  // };

  constructor(props) {
    super(props);
/*     this.onChangenumFacture = this.onChangenumFacture.bind(this);
    this.onChangefournisseur = this.onChangefournisseur.bind(this);
    this.onChangereference = this.onChangereference.bind(this);
    this.onChangenombreE = this.onChangenombreE.bind(this);
    this.onChangenombreS = this.onChangenombreS.bind(this); */
//    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
/*       numFacture: '',
      fournisseur: '',
      reference: '',
      nombreE: '',
      nombreS: '', */
      entrer: []

    };
  }
  componentDidMount() {
    axios.get(`http://localhost:8800/entrerSortie/${localStorage.id}`)
      .then(response => {
        console.log('user-article ==== ', response)
        this.setState({ entrer: response.data });
      })
      .catch(function (error) {
        //console.log(error);
      })
  }


  liste() {
    return (
      <font size="16">
      <table className="table table-bordered"> {/* table table-striped table-bordered"> */}
        <thead>
          <tr>
            <th><font size="2">TYPE</font></th>
            <th><font size="2">FACTURE</font></th>
            <th><font size="2">FOURNISSEUR</font></th>
            <th><font size="2">REFERENCE</font></th>
            <th><font size="2">NOMBRE</font></th>
          </tr>
        </thead>
        <tbody>
          {
            (this.state.entrer.length > 0) ? (this.state.entrer.map((obj) => {

              return (
                <tr key={obj._id}>
                  <td><font size="2">{obj.type}</font></td>
                  <td><font size="2">{obj.numFacture}</font></td>
                  <td><font size="2">{obj.fournisseur}</font></td>
                  <td><font size="2">{obj.reference}</font></td>
                  <td><font size="2">{obj.nombre}</font></td>
                </tr>)

            })) : ('')
          }
        </tbody>
      </table></font>)
  }


/*   ajouter = () => (
		confirmAlert({
			customUI: ({ onClose }) => {
				//var data = {this.props.post.prenom}
				return (
					<div className="custom-ui" >
					  
          <form onSubmit={this.onSubmit}>
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
                            <input type="submit" value="Register Business" className="btn btn-primary"/>
                        </div>
                    </form>
					</div>
				);
			}
		})
  )
 */  
  render() {
    return (
      <div className="container-fluid">
        
        <NavBar />
        <div className="row Dashboard">
          <div className="col-md-2">
            <Dashboard />
          </div>
          <div className="col-md-6 tab">
            <Link to={"/ajoutMouvement"} className="btn btn-primary">Ajout</Link>

            {this.liste()}
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}
