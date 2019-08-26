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
    this.onChangefac = this.onChangefac.bind(this);
    this.onChangenumFacture = this.onChangenumFacture.bind(this);
    this.onChangefournisseur = this.onChangefournisseur.bind(this);
    /* this.onChangereference = this.onChangereference.bind(this); */
    this.onChangenombre = this.onChangenombre.bind(this);
    this.onChangelocal = this.onChangelocal.bind(this);
    //this.onChangenombreS = this.onChangenombreS.bind(this);
    //this.onCheckChange = this.onCheckChange.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    this.anuler = this.anuler.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.ajouter = this.ajouter.bind(this);
    // this.achat = this.achat.bind(this);

    this.state = {
      value: '',
      fac: '',
      numFacture: '',
      fournisseur: '',
      reference: '',
      nombre: '',
      //nombreS: '',
      tab: [],
      essais: {},
      local: '',
      donne:[],
      radio1: "autre",
      choix: "",
      ref: []

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
  onChangefac(e) {
    this.setState({
      fac: e.target.value
    });
  }
  onChangefournisseur(e) {
    this.setState({
      fournisseur: e.target.value
    })

  }
  /* onChangereference(e) {
    this.setState({
      reference: e.target.reference
    })
  } */
  onChangenombre(e) {
    this.setState({
      nombre: e.target.value
    })
  }
  onChangelocal(e) {
    this.setState({
      local: e.target.value
    })
  }

  lister(e) {
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

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

 /* onSubmit(e) {
    e.preventDefault();

    alert('Votre parfum favori est : ' + this.state.reference);
     if (this.state.numFacture && this.state.fournisseur && this.state.nombre ) {
     
      this.essais = {
        numFacture: this.state.numFacture,
        fournisseur: this.state.fournisseur,
        reference: this.state.reference,
        nombre: this.state.nombre
      }
      localStorage.setItem('myData', localStorage.myData + JSON.stringify(this.tab));
      console.log('====================================');
      console.log('this.state.reference === ', this.state.reference);
      console.log('====================================');
      if(this.tab === undefined){
        this.tab = [this.essais]
      }else{
        this.tab.push(this.essais)
      }
     
      this.setState({
        numFacture: "",
        fournisseur: "",
        reference: "",
        nombre: "",
        tab: this.tab,
        local:"achat"
      })
    }else{

      this.essais = {
        numFacture: this.state.numFacture,
        reference: this.state.reference,
        nombre: this.state.nombre,
        //nombreS: this.state.nombreS

      }
      if(this.tab === undefined){
        this.tab = [this.essais]
      }else{
        this.tab.push(this.essais)
      }
      
      console.log('====================================');
      console.log('this.tab === ', this.tab);
      console.log('====================================');
      this.setState({
        numFacture: "",
        reference: "",
        nombre: "",
        tab: this.tab,
        local: "vente"
      })
    }


  }
 */

  anuler(e) {
    e.preventDefault();
    this.setState({
      numFacture: "",
      reference: "",
      nombre: "",
      tab: "",
      fournisseur: "",
      local: "vente"
    })
    console.log("annuler", this.state.tab);
  }

  ajouter(e) {
    e.preventDefault();
    console.log("button ajouter");
    console.log('====================================');
    console.log("localStorage.radio ", localStorage.radio);
    console.log('====================================');
  }


  achat(e) {
    e.preventDefault();
  }

  onRadioChange(e) {
    console.log("e.target.value", e.target.value);
    this.setState({
      [e.target.name]: e.target.value, choix: e.target.value
    })
    
    localStorage.setItem('radio', e.target.value);
  }


  componentDidMount() {
    axios.get(`http://localhost:8800/article`)
      .then(response => {
        console.log('user-article ==== ', response)
        this.setState({ ref: response.data });
      })
      .catch(function (error) {
        //console.log(error);
      })
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
            <input type="radio" name="radio1" checked={this.state.radio1 === "achat"} value="achat" onChange={this.onRadioChange} id="" /> Achat
            <input type="radio" name="radio1" checked={this.state.radio1 === "vente"} value="vente" onChange={this.onRadioChange} id="" /> Vente

            {this.state.choix === "achat" ?

<form onSubmit={this.handleSubmit}>
<label>
  Pick your favorite flavor:
  <select value={this.state.value} onChange={this.handleChange}>
  <option value="">selectionnez</option>
{ 
      (this.state.ref.length > 0) ? (this.state.ref.map((obj) => {
        return (<option value={obj.reference}>{obj.reference}</option>)
      })) : ('') }
      {/* <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option value="coconut">Coconut</option>
      <option value="mango">Mango</option> */}
  </select>
</label>
<input type="submit" value="Submit" />
</form>
       
              :

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

                  <label>reference:  </label>
                  <select
                    value={this.state.reference}
                    onChange={this.onChangereference}>
                  {
                    (this.state.ref.length > 0) ? (this.state.ref.map((obj) => {

                      return ( <option value={obj.reference}>{obj.reference}</option>)

                    })) : ('')
                  }

                  </select>

{/* 
                  <label>reference: </label>
                  <input type="text"
                    className="form-control"
                  /> */}

                </div>
                <div className="form-group">
                  <label>nombre : </label>
                  <input type="number"
                    className="form-control"
                    value={this.state.nombre}
                    onChange={this.onChangenombre}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" value="Vente" className="btn btn-primary" />
                </div>
              </form>
            }
          </div>
          {/*console.log('===============this.state.tab.length=====================', this.state.tab.length)*/}
          <div className="col-md-4 liste">

          <form onSubmit={this.ajouter}>
          {
            (this.state.tab.length > 0) ? (this.state.tab.map((obj) => {

              return (
                <tr key={obj.numFacture}>
                  <td>
                    {obj.numFacture}
                  </td>
                  <td >
                    {obj.fournisseur}
                  </td>
                  <td >
                    {obj.reference}
                  </td>
                  <td >
                    {obj.nombre}
                  </td>
                </tr>)

            })) : ('')
          }
            <input type="submit" value="ajouter" className="btn btn-primary" />
            <input type="button" value="anuler" onClick={this.anuler} />
            </form>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}



       {/* <form onSubmit={this.onSubmit} >
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
                  <select 
                    value={this.state.reference}
                    onChange={this.onChangereference}>
                      <option value="grapefruit">Pamplemousse</option>
                      <option value="lime">Citron vert</option>
                      <option value="coconut">Noix de coco</option>
                      <option value="mango">Mangue</option>
          
                    {
                      /* (this.state.ref.length > 0) ? (this.state.ref.map((obj) => {
                        return (<option value={obj.reference}>{obj.reference}</option>)
                      })) : ('') 
                    }
                  </select>
                </div>
                <div className="form-group">
                  <label>nombre : </label>
                  <input type="number"
                    className="form-control"
                    value={this.state.nombre}
                    onChange={this.onChangenombre}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" value="Achat" className="btn btn-primary" />
                </div>
              </form> */}

