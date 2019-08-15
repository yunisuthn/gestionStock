import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './Dashboard1';
import AjoutA from './postWithUpload_frontToBack';
import ListeA from './AfficheProfil';
/* import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage'; */

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/ajout' component={AjoutA} />
        <Route path='/liste' component={ListeA} />
      </Switch>
    );
  }
}

export default Routes;