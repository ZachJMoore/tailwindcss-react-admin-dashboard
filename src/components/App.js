import React, { Component } from 'react';
import '../scss/app.scss';

import { Route } from "react-router-dom"
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import Body from './Body';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import UserProfile from './pages/UserProfile';
import Navigation from './pages/Navigation';
import Input from './pages/Input';

const pages = [
  {
      name: "Dashboard",
      iconClass: "fas fa-home",
      path: "/",
      component: Dashboard
  },
  {
      name: "User Profile",
      iconClass: "fas fa-user",
      path: "/user-profile",
      component: UserProfile
  },
  {
      name: "Notifications",
      iconClass: "fas fa-bell",
      path: "/notifications",
      component: Notifications
  },
  {
      name: "Navigation",
      iconClass: "fas fa-bars",
      path: "/navigation",
      component: Navigation
  },
  {
      name: "Input",
      iconClass: "fas fa-keyboard",
      path: "/input",
      component: Input
  }
]

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      sidebarIsShown: true
    }
    this.toggleSidebar = ()=>{
      this.setState({sidebarIsShown: !this.state.sidebarIsShown})
    }
  }


  render() {
    return (
      <Route render={({location})=>{

        return <div className="app">
          <TopBar toggleSidebar={this.toggleSidebar}/>
          <div className="flex">
            <Sidebar sidebarIsShown={this.state.sidebarIsShown} pages={pages} location={location}/>
            <Body>
              {pages.map((page, index)=>{
                return <Route exact path={page.path} key={index} component={page.component} />
              })}
            </Body>
          </div>
        </div>

      }} />
    );
  }
}

export default App;
