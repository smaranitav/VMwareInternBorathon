import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import LessonPlanHome from './pages/LessonHome'
import LessonPlanPage from './pages/LessonPage'
import HwHelpHome from './pages/HwHelpHome'
import HwHelpPage from './pages/HwHelpPage'
import ExtraResourcesHome from './pages/ExResourcesHome'
import ExtraResourcesPage from './pages/ExResourcesPage'

class App extends Component{
  constructor(props){
    super(props);
    this.state={

    }}
  
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
              <Route path='/' render={() => <Home />} />
              <Route path='/lessonHome' render={() => <LessonPlanHome />} />
              <Route path='/lessonPage' render={() => <LessonPlanPage  />} />
              <Route path='/hwHelpHome' render={() => <HwHelpHome  />} />
              <Route path='/hwHelpPage' render={() => <HwHelpPage  />} />
              <Route path='/exResourcesHome' render={() => <ExtraResourcesHome  />} />
              <Route path='/exResourcesPage' render={() => <ExtraResourcesPage  />} />
          </Switch>
        </Router>
      </React.Fragment>
      // comment out the entire section above and uncomment the below component itself to try and work on one page and not have to deal with routing
      // <Home />  
    );
  }
}

export default App;
