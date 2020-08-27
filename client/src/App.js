import React from "react";
import "./styles/App.scss";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explore from "./components/gradients/Explore";
import Dashboard from "./components/dashboard/Dashboard";
import AddGradient from "./components/dashboard/AddGradient";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import Login from "./components/dashboard/Login";
import PrivateRoute from "./components/dashboard/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/explore" component={Explore} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/add_gradient"
                component={AddGradient}
              />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
