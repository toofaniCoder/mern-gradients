import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();

  const onSubmit = async (e) => {
    e.preventDefault();
    await firebase.login({
      email,
      password,
    });
    history.push("/dashboard");
  };
  return (
    <div className="login">
      <div className="container">
        <div className="section">
          <div className="columns is-centered">
            <div className="column is-6">
              <div className="box">
                <form onSubmit={onSubmit}>
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Enter your e-mail address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input
                        class="input"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <button
                        type="submit"
                        className="button is-primary is-fullwidth"
                      >
                        Signin to dashboard
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
