import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/navbar'
import routes from './routes'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
          <Menu />

          {/* Contents */}
          <Switch>
            {this.showContentMenus(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    if(routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        )
      })
    }
  }
}

export default App;
