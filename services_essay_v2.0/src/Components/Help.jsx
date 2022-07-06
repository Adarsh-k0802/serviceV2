import React from "react";
import Web from "../Images/help.svg";
import Tick from "../Images/tick.svg";

const Help=()=>{
    return(
        <>
         <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg helpback padb">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-8 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h4>
                    <br /> <div className="brand-name">How Do We Help With Writing Your Essays?</div>
                  </h4>
                <h6 className="para">
                We believe in a more engaging assignment help method where we maintain a communication channel with you throughout the writing process. This guarantees that your needs are regularly addressed, and your essay helper can make changes according to your suggestions at every step to make optimum use of the service you have paid for.
                </h6>
                <h6 className="para">
                We provide you with:</h6>
                <h6 className="para"><span className="tick"><img src={Tick} className="tick-img"/></span>   A highly professional team</h6>
                <h6 className="para"><span className="tick"><img src={Tick} className="tick-img"/></span>   Excellent market experience</h6>
                <h6 className="para"><span className="tick"><img src={Tick} className="tick-img"/></span>   Native speaking writers</h6>
                <h6 className="para"><span className="tick"><img src={Tick} className="tick-img"/></span>   Experts in various subjects</h6>
                <h6 className="para"><span className="tick"><img src={Tick} className="tick-img"/></span>   Top-rated service</h6>
                

                  
                </div>

                <div className="col-lg-4 order-1 order-lg-2 header-img">
                  <img
                    src={Web}
                    className="img-help "
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

export default Help;