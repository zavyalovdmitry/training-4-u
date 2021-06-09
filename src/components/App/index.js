import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { Auth } from '../Auth'
import { Header } from "../Header";
import { Footer } from "../Footer/Footer";
import { Main } from "../Main";
import { Sidebar } from "../Sidebar";
import Test from '../Test';

export const App = () => {
  return (
    <>
      <Sidebar />
      <div className="mainContent-wrap">
        <Header />
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/trainings" component={Main} />
          <Route
            exact path="/test/:subject/:title"
            render={({ match }) => (
              <Test subject={match.params.subject} title={match.params.title} />
            )}
          />
          <Redirect to="/trainings" />
        </Switch>
        <Footer />
      </div>
    </>
  )
}
