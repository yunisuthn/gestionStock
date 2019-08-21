import React from "react";


export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="">
        <ul className="nav flex-column ul">
          <li className="nav-item active">
            <a className="nav-link" href="/stock">Stock</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/mouvement">Entré/Sortie</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/fournisseur">Fournisseur</a>
          </li>
        </ul>
      </div>
    );
  }
}
