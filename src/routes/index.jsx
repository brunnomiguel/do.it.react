import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/login"} exact component={Login} />
      <Route path={"/register"} exact component={Register} />
      <Route path={"/dashboard"} exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;
