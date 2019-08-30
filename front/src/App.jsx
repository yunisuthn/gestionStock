import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import { PrivateRoute } from "./components/PrivateRoute.js";

import {Stock } from "./components/Dashboard/Stock.js";
import {AjoutS } from "./components/Dashboard/stock/AjoutS.js";
import {EditS } from "./components/Dashboard/stock/EditS.js";

import {Mouvement } from "./components/Dashboard/Mouvement.js";
import {AjoutM } from "./components/Dashboard/mouvement/AjoutM.js";
import {EditM } from "./components/Dashboard/mouvement/EditM.js";

/* import {Fournisseur } from "./components/Dashboard/Fournisseur.js"; */
import {Profil } from "./components/Dashboard/Profil.js";

import { Acceuil } from "./components/componentsExt/Acceuil";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Acceuil} />
            <Route exact path="/connecter" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/stock" component={Stock} />

            <PrivateRoute path="/profil" component={Profil} />
            <PrivateRoute path="/ajoutStock" component={AjoutS} />
            <PrivateRoute path="/editStock/:id" component={EditS} />
            
            <PrivateRoute path="/mouvement" component={Mouvement} />
            <PrivateRoute path="/ajoutMouvement" component={AjoutM} />
            <PrivateRoute path="/editMouvement/:id" component={EditM} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
