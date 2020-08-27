import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";

const UserNavbar = (props) => {
  return (
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <Link to="/explore" class="button is-warning">
            <strong>explore</strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

const AdminNavbar = ({ email }) => {
  const firebase = useFirebase();
  return (
    <Fragment>
      <div class="navbar-start">{email}</div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-warning" onClick={() => firebase.logout()}>
              <strong>signout</strong>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Navbar = () => {
  const firebaseReducer = useSelector((state) => state.firebase);
  const { auth } = firebaseReducer;
  return (
    <nav
      class="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div class="navbar-brand">
          <Link class="navbar-item" to="/">
            <img
              src="https://res.cloudinary.com/dxrbrkfvv/image/upload/v1592307492/react-original_gjlpfv.png"
              alt=""
            />
          </Link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          {!auth.isEmpty ? <AdminNavbar email={auth.email} /> : <UserNavbar />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
