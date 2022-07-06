import React from "react";
import Web from "../Images/squote2.svg";
import shadowquote from '../Images/shadowquote.svg';

const Squote2=()=>{
    return(
        <>
         <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg quoteback padb">
          <div className="row">
            <div className="col-10 mx-auto">
              <img src={shadowquote} className="backshadow"/>
              <div className="row">
                <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h4>
                    <br /> <div className="brand-name">Need Help With Your Essays? <br/>Check Out Assignment Writing Services!</div>
                  </h4>
                <h6 className="para">
                We understand how difficult it is to write good quality essays in a<br/> short time. We have brought together a team of expert professional<br/> assignment helpers to assist you with best essay writing services.
                </h6>

                  <div className="mt-3 ">
                    <a href="#" className="btn btn-primary btnbrand btnQuote">
                      Request Quote
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={Web}
                    className="img-fluid "
                    alt="home-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        </>
    )
}

export default Squote2;