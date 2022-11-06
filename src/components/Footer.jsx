import React from "react";
import '../App.css';

function Footer(){
    return(
        <div className="footer">

         
            <div className="flx">
            <div className="foot-nav">
            <h6>Top Products</h6>
              <ul className="nav flex-column">
                <li>Managed Website</li>  
                <li>Manage Reputation</li>  
                <li>Power Tools</li>  
                <li>Marketing Service</li> 
            
              </ul>        
        </div>
                <div className="form">
                    <h6>Newsletter</h6>
                     <p>You can trust us. we only send promo offers, not a single spam.
                     </p> 
                    <div className="input-group">
                        <div className="form-outline">
                         <input type="search" id="form1" className="form-control" value="Email"/>
                         <label className="form-label" for="form1"></label>
                        </div>
                        <div className="subs">
                          <button type="button" className="btn6 btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
                 <div className="inst-feeds">
                     <h6>Instragram Feed</h6>
                     <img className="feed-img" src="images/feeds.png" alt=""/>
                 </div>
            </div>

            <div className="copyright">
                 <p> Copyright ©2022 All rights reserved | This template is made with 🤍 by Mahnoor
                </p> 
            </div>
         
            <div class="icon row row-cols-4">
               <a href="https://www.facebook.com/">
                 <img className="icon1" src="images/square-facebook.svg" alt=""/>
                </a> 
                <a href="https://twitter.com/login">
                 <img className="icon1" src="images/square-twitter.svg" alt=""/>
                </a> 
                <a href="https://dribbble.com/">
                 <img className="icon1" src="images/square-dribbble.svg" alt=""/>
                </a> 
                <a href="https://www.behance.net/search">
                 <img className="icon1" src="images/square-behance.svg" alt=""/>
                </a> 
            </div>
        </div>
    );
}
export default Footer