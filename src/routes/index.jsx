import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { useEffect, useState } from "react";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Doit:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route path="/" exact>
        <Home authenticated={authenticated} />
      </Route>
      <Route path="/register" >
        <Register authenticated={authenticated} />
      </Route>
      <Route path="/login" >
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/dashboard" >
        <Dashboard authenticated={authenticated} />
      </Route>
    </Switch>
  );
};

export default Routes;
