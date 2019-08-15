import React from 'react';
import { BrowserRouter as BrowserRouter, Router, Switch, Route } from 'react-router-dom';

/* import Acceuil from './components/Accueil';
import Login from './users/Login/Login';
import PostFrontToBack from './users/Dashboard/postWithUpload_frontToBack';
import './App.css'

// import { Dashboard } from './users/Dashboard/Dashboard.js';
import { PrivateRoute } from './users/PrivateRoute.js';*/

// import Navbar from './tenaComponent/Navbar';
import Footer from './Components/Footer';
import Acceuil1 from './Components/Accueil1';
import Introduction from './Components/Introduction';
import Objectif from './Components/Objectif';
import Signup from './users/Signup/Signup';

import { PrivateRoute } from './users/PrivateRoute.js';
import Login from './users/Login/Login';
import Atelier from './Components/Atelier';
import Inscrire from './Components/Inscrire';
import Dashboard from './users/Dashboard/Admin/Dashboard1' 
import AjoutA from './users/Dashboard/Admin/postWithUpload_frontToBack';
import ListeA from './users/Dashboard/Admin/AfficheProfil';

import Edit from './users/Dashboard/Admin/Edit'; 



class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        {/* <Router> */}
          <div className='div'>
            {/* <Navbar/> */}
           
            <Switch className='margin'>
              <Route exact path='/' component={Acceuil1} />
              {/* <PrivateRoute path="/dashboard" component={PostFrontToBack} /> */}
              <PrivateRoute path="/admin" component={Dashboard} />

              <Route path='/connect' component={Login} />
              <PrivateRoute path='/ajout' component={AjoutA} />
              <PrivateRoute path='/liste' component={ListeA} />

              <Route exact path='/atelier' component={Atelier} />
              <Route path='/inscrire' component={Inscrire} /> 
              {/* <Route exact path='/acceuil' component={Acceuil} />
              <PrivateRoute path="/dashboard" component={PostFrontToBack} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Signup} />
              <Route path='/inscrire' component={Inscrire} /> */}

              <Route path='/introduction'
          render={ props => <Introduction {...props} />} />
          <Route path='/objectif'
      render={ props => <Objectif {...props} />} />
              {/* <Route path='/introduction' component={Introduction} /> */}
              {/* <Route path='/objectif' component={Objectif} /> */}
              <Route path='/register' component={Signup} />
              <PrivateRoute path="/edit/:id" component={Edit} />
              {/* <PrivateRoute path="/userArticle" component={AfficheProfil} /> */}

              {/* <PrivateRoute path="/profil" component={ListTous} /> 
              <PrivateRoute path="/userArticle" component={AfficheProfil} />
              <PrivateRoute path="/edit/:id" component={Edit} />
              {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}


            </Switch>
          </div>
{/* 
          </Router> */}
      </BrowserRouter>
    );
  }
}

export default App;