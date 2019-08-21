import React from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

import axios from 'axios';

import { Link } from 'react-router-dom';
export class Stock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { profil: [] };

  }
  componentDidMount() {
      axios.get(`http://localhost:8800/article`)
          .then(response => {
              //console.log('user-article ==== ', response)
              this.setState({ profil: response.data });
          })
          .catch(function (error) {
              //console.log(error);
          })
  }


  liste() {
    var msg;
    if (this.state.checked) {
        msg = "checked";
    } else {
        msg = "unchecked";
    }
    return <table className="table">
        <thead>
            <tr>
                <th>NOM PIECE</th>
                <th>PRIX UNITAIRE</th>
                <th>NOMBRE STOCK</th>
                <th>PRIX STOCK</th>
                <th>STOCK MINIMUM</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {
                (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

                    return <tr key={obj._id}>
                        <td>{obj.nomPiece}</td>
                        <td>{obj.prixUnit}</td>
                        <td>{obj.nbStock}</td>
                        <td>{obj.prixStock}</td>
                        <td>
                        {obj.stockMin}
                        </td>
                        <td>
                            <Link to={"/editStock/" + obj._id} className="btn btn-primary">Edit</Link>
                        </td>
                        {/*console.log(obj)*/}
                    </tr>

                })) : ('')
            }
        </tbody>
    </table>
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
              <Link to={"/ajoutStock"} className="btn btn-primary">Ajout</Link>

              {this.liste()}
            </div>
          </div>
        <Footer/>


   
      </div>
    );
  }
}
