import React from "react";


function   Uniqfeature(){
    return(
            <div className="cards">
              <h1>Some Features that Made us Unique</h1>
              <p>Who are in extremely love with eco friendly system.</p>
              <div className="flex2">
                 <div className="first-bar ">
                   <input type="search" className="form-control rounded" placeholder="Event" aria-label="Search" aria-describedby="search-addon" />
                   <span className="input-group-text border-0" id="search-addon">
                   <i className="fas fa-search"></i>
                   </span>
                   <h2>Yoke Party</h2>
                   <h6>04 Nov 2017</h6>
                <p>📍Mumbai,India</p>
                  
                <img className = "Imges" src="images/girl-1.jfif" alt=""/>
              </div>
              <div className="second-bar">
                <input type="search" className="form-control rounded" placeholder="Event" aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search"></i>
                </span>
                <h2>Kabali Show </h2>
                  <h6>27 Jan 2017</h6>
                <p>📍Mumbai,India</p>
                  
                <img className = "Imges" src="images/kabali-1.jfif" alt=""/>
              </div>
                <div className="third-bar">
                  <input type="search" className="form-control rounded" placeholder="Event" aria-label="Search" aria-describedby="search-addon" />
                  <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                  </span>
                  <h2>Smoke Show</h2>
                    <h6>12 Sep 2020</h6>
                  <p>📍Berlin,Germany </p>
                    
                  <img className = "Imges" src="images/smoke-1.jfif" alt=""/>
                </div>
               </div>
            </div>
        
        
    );  
}  
export default Uniqfeature