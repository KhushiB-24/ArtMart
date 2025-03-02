import React from "react";
import './SignUp.css';

const SignUp = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-30">
        <div className="card p-4 shadow-lg">
          <h2 className="text-center">Sign up for an account</h2>
          <p className="text-center text-muted">
            Sign up now and start your journey to smarter, more rewarding
            trading!
          </p>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                required=""
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required=""
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <div className="input-group">
                <span className="input-group-text">🇺🇸 +1</span>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                  required=""
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                required=""
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <input type="date" className="form-control" required="" />
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label className="form-label">Promocode</label>
                <input type="text" className="form-control" placeholder="-" />
              </div>
              <div className="col">
                <label className="form-label">Currency</label>
                <select className="form-select">
                  <option selected="">USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </div>
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                required=""
              />
              <label className="form-check-label">
                By registering you agree to our{" "}
                <a href="#">terms &amp; conditions</a> and{" "}
                <a href="#">privacy notice</a>.
              </label>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Create Account
            </button>
            <p className="text-center mt-3">
              Already have an account? <a href="#">Login</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
