import { React, useState } from "react";
import "./basicForm.css";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const BasicForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  const handleApi = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        alert("Success");
        localStorage.setItem("token", result.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        alert("Service Error");
      });
  };

  return (
    <>
      <section className="main">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <h1>Login Form</h1>
            <img src="./my_logo.jpg" alt="err_loading" />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="passWord"
              placeholder="Password"
              autoComplete="off"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-lg btn-warning btn-outline-dark"
            type="submit"
            onClick={handleApi}
          >
            Login
          </button>
        </form>
        <div className="outputData">
          {allEntry.map((currElement) => {
            return (
              <>
                <div className="showDetails">
                  <p>{currElement.email}</p>
                  <p>{currElement.password}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BasicForm;
