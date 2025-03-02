import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Componants/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Componants/Home";
import Explore from "./Componants/Explore";
import Category from "./Componants/Category";
import About from "./Componants/About";
import Contact from "./Componants/Contact";
import SignUp from "./Componants/SignUp";
import SignIn from "./Componants/SignIn";


function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/categories" element={<Category />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
