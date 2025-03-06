import React from "react";
import "./SignUp.css";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    usertype: "",
  });

  let handleChange = (e) => {
    var { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const [res, setRes] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users", user)
      .then(() => {
        setRes("Added successfully");
      })
      .catch(() => {
        setRes("Something wents wrong");
      });
  };

  const [userType, setUserType] = useState("");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container-fluid" id="contact-all">
              <div className="row text-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <p style={{ fontSize: 40 }}>
                    Let's Create{" "}
                    <span style={{ color: "#4DA1A9", fontWeight: 700 }}>
                      Your
                      <br />Account As Customer
                    </span>
                  </p>
                  <p style={{ fontSize: 20 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis amet blanditiis dolores.
                  </p>
                </div>
              </div>

              <div className="row">
                <div
                  className="col col-12 col-sm-12 col-md-12 col-lg-12"
                  id="contact-form">
                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                      <label htmlFor="Name">Your Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Ex.John Doe"
                        aria-label="First name"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                      <label htmlFor="Email">Email</label>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="example@gmail.com"
                        aria-label="Last name"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12">
                      <label htmlFor="Phone">Phone</label>
                      <input
                        name="phone"
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        aria-label="First name"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12">
                      <label htmlFor="Interest">Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                      <p>Already have an account? Login</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container-fluid" id="contact-all">
              <div className="row text-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <p style={{ fontSize: 40 }}>
                    Let's Create{" "}
                    <span style={{ color: "#4DA1A9", fontWeight: 700 }}>
                      Your
                      <br />Account As An ARTIST
                    </span>
                  </p>
                  <p style={{ fontSize: 20 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis amet blanditiis dolores.
                  </p>
                </div>
              </div>

              <div className="row">
                <div
                  className="col col-12 col-sm-12 col-md-12 col-lg-12"
                  id="contact-form">
                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                      <label htmlFor="Name">Your Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Ex.John Doe"
                        aria-label="First name"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                      <label htmlFor="Email">Email</label>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="example@gmail.com"
                        aria-label="Last name"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12">
                      <label htmlFor="Phone">Phone</label>
                      <input
                        name="phone"
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                        aria-label="First name"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12">
                      <label htmlFor="Interest">Password</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        required=""
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                      <p>Already have an account? Login</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
