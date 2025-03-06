import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./Componants/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Pre-LoginPages/Home";
// import Explore from "./Componants/Explore";
// import Category from "./Componants/Category";
import About from "./Pre-LComponants/About";
import Contact from "./Pre-LComponants/Contact";
import Signup from "./Pre-LComponants/Signup";
import Signin from "./Pre-LComponants/Signin";
import Navbar from "./Pre-LComponants/Navbar";


function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      </BrowserRouter>
      
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/categories" element={<Category />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
