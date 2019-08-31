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
    this.onChangenombreE = this.onChangenombreE.bind(this);
    this.onChangenombreS = this.onChangenombreS.bind(this);
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
      nombreE: '',
      nombreS: '',
      //nombreS: '',
      tab: [],
      essais: {},
      tabV: [],
      essaisV: {},
      local: '',
      donne:[],
      radio1: "autre",
      choix: "",
      ref: [],

    };
  }
  onChangenumFacture(e) {
    this.setState({
      numFacture: e.target.value
    });
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
  onChangenombre(e) {
    this.setState({
      nombre: e.target.value
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
      user: localStorage.id
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
    //alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    if(this.state.value === "" || this.state.value ==="selectionnez"){
      return
    }else if (this.state.numFacture && this.state.fournisseur && this.state.nombre && this.state.value ){
      this.essais = {
        numFacture: this.state.numFacture,
        fournisseur: this.state.fournisseur,
        reference: this.state.value,
        nombreE: this.state.nombre,
        user : localStorage.id
      }
      ///localStorage.setItem('myData', localStorage.myData + JSON.stringify(this.tab));
      console.log('====================================');
      console.log('this.state.reference === ', this.state.value);
      console.log('====================================');
      if(this.tab === undefined){
        this.tab = [this.essais]
      }else{
        /* for (let j = 0; j=this.tab.length; j++){
          console.log('====================================');
          console.log("this.tab[j].reference" , this.tab);
          console.log('====================================');
          /* if(this.tab[j].reference === this.essais.reference){
            this.tab[j].nombreE = this.tab[j].nombreE + this.essais.nombreE
            console.log('=================mitovy===================');
          }else{
            console.log('================different====================');
          } * /
        } */
        this.tab.push(this.essais)
      }
     
      this.setState({
        numFacture: "",
        fournisseur: "",
        value: "",
        nombre: "",
        tab: this.tab,
        local:"achat"
      })
    }else if (this.state.numFacture && this.state.nombre && this.state.value){

      this.essaisV = {
        numFacture: this.state.numFacture,
        reference: this.state.value,
        nombreS: this.state.nombre,
        user: localStorage.id
        //nombreS: this.state.nombreS
      }
      if(this.tabV === undefined){
        this.tabV = [this.essaisV]
      }else{
        this.tabV.push(this.essaisV)
      }
      
      console.log('====================================');
      console.log('this.tabV === ', this.tabV);
      console.log('====================================');
      console.log('================vente====================', localStorage.radio);
      this.setState({
        numFacture: "",
        reference: "",
        nombre: "",
        tabV: this.tabV,
        local: "vente",
        value: ""
      })
    }
  }


  anuler(e) {
    e.preventDefault();
    this.setState({
      numFacture: "",
      value: "",
      nombre: "",
      tab: "",
      tabV: "",
      fournisseur: "",
      local: "vente"
    })
    console.log("annuler", this.state.tab);
  }

  ajouter = (e) => {
    e.preventDefault();
    console.log("button ajouter == ", this.state.tab);
    if(localStorage.radio === "achat"){
      console.log('==============achat======================', this.state.tab);
      for(let i= 0; i<this.state.tab.length; i++){
        axios.post('http://localhost:8800/entrer', this.state.tab[i])
          .then(res => console.log(res.data))
          console.log('==============this.state.tab.length======================', this.state.tab.length);
      }
      this.setState({
        tab: ""
      })
    }else if(localStorage.radio === "vente"){

      console.log('==============achat======================', this.state.tabV);
      for(let i= 0; i<this.state.tabV.length; i++){
        axios.post('http://localhost:8800/sortie', this.state.tabV[i])
            .then(res => console.log(res.data))
            console.log('==============achat======================', this.state.tabV[i]);
      }
      this.setState({
        tabV: ""
      })
    }
  }


  achat(e) {
    e.preventDefault();
  }

  onRadioChange(e) {
    console.log("e.target.value", e.target.value);
    this.setState({
      [e.target.name]: e.target.value, 
      choix: e.target.value,
      numFacture: "",
      value: "",
      nombre: "",
      tab: "",
      fournisseur: ""
    })
    
    localStorage.setItem('radio', e.target.value);
  }


  componentDidMount() {
    axios.get(`http://localhost:8800/article/${localStorage.id}`)
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
          <div className="col-md-5 tab">
            <input type="radio" name="radio1" checked={this.state.radio1 === "achat"} value="achat" onChange={this.onRadioChange} id="" /> Achat
            <input type="radio" name="radio1" checked={this.state.radio1 === "vente"} value="vente" onChange={this.onRadioChange} id="" /> Vente

            {this.state.choix === "achat" ?

              <form onSubmit={this.handleSubmit}>
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
                  <label>reference:  </label>
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
                </select></div>
                <div className="form-group">
                  <label>nombre : </label>
                  <input type="number"
                    className="form-control"
                    value={this.state.nombre}
                    onChange={this.onChangenombre}
                  />
                </div>
              {/* <input type="submit" value="Submit" /> */}

              <div className="form-group">
                  <input type="submit" value="Achat" className="btn btn-primary" />
                </div>
              </form>
       
              :

              <form onSubmit={this.handleSubmit} >

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

                <select value={this.state.value} onChange={this.handleChange}>
                <option value="">selectionnez</option>
              { 
                    (this.state.ref.length > 0 ) ? (this.state.ref.map((obj) => {
                      return (<option value={obj.reference}>{obj.reference}</option>)
                    })) : ('') }
                 {/*  <select
                    value={this.state.reference}
                    onChange={this.onChangereference}>
                  {
                    (this.state.ref.length > 0) ? (this.state.ref.map((obj) => {

                      return ( <option value={obj.reference}>{obj.reference}</option>)

                    })) : ('')
                  }
 */}
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
          <div className="col-md-4 liste ">

          <form onSubmit={this.ajouter}>
            <table clasname = "table table-striped table-bordered">
          {
            ((this.state.tab.length > 0) && (localStorage.radio=== "achat")) ? (this.state.tab.map((obj) => {
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
                    {obj.nombreE}
                  </td>
                </tr>)

            })) : ('')
          }
          {
          console.log("this.state.tabV.length ==== ", this.state.tabV.length)}
          
          {
            ((this.state.tabV.length > 0) && (localStorage.radio=== "vente")) ? (this.state.tabV.map((obj) => {
          
              return (
                <tr key={obj.numFacture}>
                  <td>
                    {obj.numFacture}
                  </td>
                  <td >
                    {obj.reference}
                  </td>
                  <td >
                    {obj.nombreS}
                  </td>
                </tr>)

            })) : ('')
          }
            <input type="submit" value="ajouter" className="btn btn-primary" />
            <input type="button" value="anuler" onClick={this.anuler} />
            </table>
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
              </form> 
 onSubmit(e) {
    e.preventDefault();
    console.log('====================================');
    console.log("this.state == ", this.state);
    console.log('====================================');
    //alert('Votre parfum favori est : ' + this.state.value);
    /*  if (this.state.numFacture && this.state.fournisseur && this.state.nombre ) {
     
      this.essais = {
        numFacture: this.state.numFacture,
        fournisseur: this.state.fournisseur,
        reference: this.state.value,
        nombre: this.state.nombre
      }
      localStorage.setItem('myData', localStorage.myData + JSON.stringify(this.tab));
      console.log('====================================');
      console.log('this.state.reference === ', this.state.value);
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
*/}

