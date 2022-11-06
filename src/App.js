import React from"react";
import './App.css';
import Newapp from "./components/Newapp";
import Footer from "./components/Footer";
import News from "./components/News";
import Mobile from "./components/Mobile";
import Feature from "./components/Feature";
import Video from "./components/Video";
import Uniqfeature from "./components/Uniqfeature";
import Prices from "./components/Prices";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import {
  BrowserRouter, 
  Routes, 
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
  
  <BrowserRouter>
    <div>
    <div className="apps">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <img className="app" src="./images/apps.png" alt="app-icon"/>
   <a className="navbar-brand" href="#">Apps</a>
  
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
 
   <div className="list collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <Link   to="/Newapp" className="nav-link" > Home </Link>
    </li>
    <li className="nav-item active">
      <Link   to="/News" className="nav-link">Service </Link>
    </li>
    <li className="nav-item active">
      <Link  to="/Feature" className="nav-link">Feature </Link>
    </li>
    <li className="nav-item active">
      <Link  to="/Prices" className="nav-link">Price</Link>
    </li>
    <li className="nav-item active">
      <Link to="/FAQ" className="nav-link">FAQ </Link>
    </li>
    <li className="nav-item active dropdown ">
      <Link to="/Uniqfeature" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Pages
      </Link>
    </li> 
  </ul>
  </div>  
  </nav>
  </div>
  
      <Routes>
        <Route path="/Newapp" element={<Newapp />}/>
          <Route path="/News" element={<News />} />
          <Route path="/Feature" element={<Feature/>} />
          <Route path="/Prices" element={<Prices />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Uniqfeature" element={<Uniqfeature/>} />
      
      </Routes>
   
      
      <Mobile/>
      <Video/>
      
      <Download/>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
