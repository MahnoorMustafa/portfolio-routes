import React from "react";


function News(){
    return(
        <div className="container-fluid">
              <h2>Latest News from all categories</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br/>
                ut labore et dolore magna aliqua.</p>
        
            <div className="row">
                <div className="feature-box col-lg-4">
                  <img className="img-src" src="images/maintenace.png" alt=""/>
                  <h3 className="feature-title">Maintenance</h3>
                  <p>inappropriate behavior is often laughed <br/>
                    off as “boys will be boys,” women face <br/>
                    higher conduct standards especially <br/>
                    in the workplace. That's why.</p>
                </div>
        
                <div className="feature-box col-lg-4">
                  <img className="img-src"  src="images/service.png" alt=""/>
                  <h3 className="feature-title">Residental Service</h3>
                  <p>inappropriate behavior is often laughed <br/>
                    off as “boys will be boys,” women face <br/>
                    higher conduct standards especially <br/>
                    in the workplace. That's why.</p>
                </div>
        
                <div className="feature-box col-lg-4">
                  <img className="img-src" src="images/service-2.png" alt=""/>
                  <h3 className="feature-title">Commercial Service.</h3>
                  <p>inappropriate behavior is often laughed <br/>
                    off as “boys will be boys,” women face <br/>
                    higher conduct standards especially <br/>
                    in the workplace. That's why.</p>
                 </div>
            </div>
      </div>
    );
}
export default News