import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import LessonPlanHome from './pages/LessonHome'
import LessonPlanPage from './pages/LessonPage'
import HwHelpHome from './pages/HwHelpHome'
import HwHelpPage from './pages/HwHelpPage'
import HwDetailed from './pages/HwDetailed'
import ExtraResourcesHome from './pages/ExResourcesHome'
import ExtraResourcesPage from './pages/ExResourcesPage'
import SideBarNav from './constants/sidebarNav'

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
              <SideBarNav>
                <Route path='/' render={() => <Home />} exact />
                <Route path='/lessons' render={() => <LessonPlanHome />} exact/>
                <Route path='/lessons/page' render={() => <LessonPlanPage  />} exact/>
                <Route path='/hwHelp' render={() => <HwHelpHome  />} exact/>
                <Route path='/hwHelp/page' render={() => <HwHelpPage  />} exact/>
                <Route path='/expanded/:articleId' render={() => <HwDetailed  />} exact/>
                <Route path='/exResources' render={() => <ExtraResourcesHome  />} exact/>
                <Route path='/exResources/page' render={() => <ExtraResourcesPage  />} exact/>
              </SideBarNav>
          </Switch>
        </Router>
      </React.Fragment>
      // comment out the entire section above and uncomment the below component itself to try and work on one page and not have to deal with routing
      // <Home />
    );
  }
}

export default App;
