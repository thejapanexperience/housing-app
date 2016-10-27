import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './components/Layout';
import AddData from './components/AddData';
import Landing from './components/Landing';
import Data1 from './components/Data1';
import Data2 from './components/Data2';
import Details from './components/Details';

render(
  <MuiThemeProvider>

    <div>
      <div id="background" />
      <div id="content">
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Landing} />
            <Route path="/adddata" component={AddData} />
            <Route path="/manageclients" component={Data1} />
            <Route path="/manageproperties" component={Data2} />
            <Route path="/details" component={Details} />
          </Route>
        </Router>
      </div>
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
);
