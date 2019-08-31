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
    axios.get(`http://localhost:8800/article/${localStorage.id}`)
      .then(response => {
        //console.log('user-article ==== ', response)
        this.setState({ profil: response.data });
      })
      .catch(function (error) {
        //console.log(error);
      })
  }


  liste() {
    return (
      <table className="table table-hover table-responsive table-striped  table-bordered ">{/* //table table-striped table-bordered"> */}
        <thead>
          <tr>
            <th><font size="2">NOM PIECE</font></th>
            <th><font size="2">PRIX UNITAIRE</font></th>
            <th><font size="2">NOMBRE STOCK</font></th>
            <th><font size="2">PRIX STOCK</font></th>
            <th><font size="2">STOCK MINIMUM</font></th>
            <th><font size="2">ACTION</font></th>
          </tr>
        </thead>
        <tbody>
          {
            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {

              return (
                <tr key={obj._id}>
                  <td><font size="2">{obj.nomPiece}</font></td>
                  <td><font size="2">{obj.prixUnit}</font></td>
                  <td><font size="2">{obj.nbStock}</font></td>
                  <td><font size="2">{obj.prixStock}</font></td>
                  <td><font size="2">
                    {obj.stockMin}</font>
                  </td>
                  <td>
                    <Link to={"/editStock/" + obj._id} className="btn btn-primary">Edit</Link>
                  </td>
                </tr>)

            })) : ('')
          }
        </tbody>
      </table>)
  }
  render() {
    return (
      <div className="">

        <NavBar />
        {console.log('localstorage: ', localStorage.id)}
        <div className="row Dashboard">
          <div className="col-md-2">
            <Dashboard />
          </div>
            <span className="">
            <div className="col-md-12 stock ">
              <Link to={"/ajoutStock"} className="btn btn-primary">Ajout</Link>

              {this.liste()}
            </div>
            </span>
        </div>
        <Footer />

      </div>
    );
  }
}
