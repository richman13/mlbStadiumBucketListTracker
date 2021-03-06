import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import StadiumIndex from './StadiumIndex.js'
import StadiumShowPage from './StadiumShowPage.js'
import LandingPage from './LandingPage.js'
import AuthenticatedRoute from './authentication/AuthenticatedRoute.js'
import VisitShowPage from "./VisitShowPage";
import GameShowPage from "./GameShowPage"


const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);
  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/stadiums' component={StadiumIndex} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/stadiums/:id">
          <StadiumShowPage user={currentUser} />
        </Route>
        <Route exact path="/visits">
          <VisitShowPage user={currentUser} />
        </Route> 
        <Route exact path="/schedule" component={GameShowPage} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
