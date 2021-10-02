import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "page/dashboard/Dashboard";
import Counter from "page/counter";
import NotFound from "page/notFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/counter" component={Counter} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
