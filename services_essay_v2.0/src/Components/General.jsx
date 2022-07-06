import React from "react";
import Web from "../Images/general.svg";

const General=()=>{
    return(
        <>
         <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg generalback padb">
          <div className="row">
            <div className="col-10 mx-auto">

              <div className="row">
                
           
                <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                  <h4>
                    <br /> <div className="brand-name">General Assistance With Your Writing</div>
                  </h4>
                <h6 className="para">
                Our Assignment Writing Services are not limited to academic writing. Our essay service includes writing help on any topic with any deadline. Whether you are a student, a non-academic researcher, or a business professional, Assignment Writing Services is here to help you!
                </h6>

                  <div className="mt-3 ">
                    <a href="#" className="btn btn-primary btnbrand btnQuote">
                    Place Order
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-1 header-img">
                  <img
                    src={Web}
                    className="img-fluid1 "
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

export default General;