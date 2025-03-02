import React from "react";
import "./Home.css";
import img1 from "../Images/Handimage.jpg";
import img2 from "../Images/pinknature.jpg";
import img3 from "../Images/boatview.jpeg";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Explore from "./Explore";
import SignIn from "./SignIn";

const Home = () => {

  const arrofDiscover = ["Paintings", "Abstract art", "Featured", "Landscape", "Photography", "Sculpture", "Object", "Digital Art"]
  return (
    <>
      <div className="container-fluid" id="main-body">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-7 p-0 ">
            <img src={img1} style={{ height: 430 }} id="img1hand" />
            <img src={img2} style={{ height: 215 }} id="img2pink" />
            <img src={img3} id="img3boat" style={{ height: 170, width: 290 }} />
          </div>
          <div
            className="col col-12 col-sm-12 col-md-12 col-lg-5"
            id="right-discrip"
          >
            <span>
              DISCOVER UNIQUE ART. SELL YOUR <small>CREATIVITY</small>.
            </span>
            <p>
              {" "}
              “Buy, sell, and explore a world of sketches, paintings, and
              masterpieces crafted by artists worldwide.”
            </p>
            <button type="submit" className="">
              <Routes>
                <Route path="/explore" element={<Explore/>}></Route>
              </Routes>
              Explore
            </button>
            <button type="submit" className="">
            <Routes>
                <Route path="/signin" element={<SignIn/>}></Route>
              </Routes>
            </button>
          </div>
        </div>
      </div>
      <h3 style={{ textAlign: "center", color: "white" }}>Discover More</h3>

      <div className="container-fluid" id="art-types">

        {arrofDiscover.map((a)=>{
          return(
            <div>
                <span className="card p-3 mx-4 ">
                  <a href="#">{a}</a>
                </span>
            </div>
          )
        })}
       
      </div>
    </>
  );
};

export default Home;
