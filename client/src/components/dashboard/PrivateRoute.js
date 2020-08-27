import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../layouts/Loader";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const firebaseReducer = useSelector((state) => state.firebase);
  const { isEmpty, isLoaded } = firebaseReducer.auth;

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !isEmpty ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
