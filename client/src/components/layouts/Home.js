import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container ">
        <div className="columns">
          <div className="column is-6 has-text-centered">
            <img
              src="https://res.cloudinary.com/dxrbrkfvv/image/upload/v1592307492/react-original_gjlpfv.png"
              className="logo"
              alt=""
            />
            <h1 className="title is-1 has-text-black">React Gradient</h1>
            <h2 className="subtitle">
              explore all beautiful handcrafted gradients
            </h2>

            <Link to="/explore" className="button is-primary">
              explore gradients
            </Link>
          </div>
          <div className="column is-6">
            <div className="box">
              <img
                src="https://res.cloudinary.com/dxrbrkfvv/image/upload/v1592380277/hero_anim_ca2hdg.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
