import React from "react";


 function Nav(){
    return(
        
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
                <a className="nav-link" href="#Architecture">Home </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#features">Service </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#feature-box">Feature </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#price">Price</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#question-bar">FAQ</a>
              </li>
              <li className="nav-item active dropdown ">
                <a className="nav-link dropdown-toggle" href="#footer-section" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages
                </a>
              </li> 
            </ul>
          </div>  
        </nav>
        </div>
        );
}
export default Nav






