import React from "react";
import Web from "../Images/plagiarism.svg";

const Plagiarism=()=>{

    return(
        <>
         <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg plagback padb">
          <div className="row">
            <div className="col-10 mx-auto">

                

              <div className="row">
                
           
                <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                  <h4>
                    <br /> <div className="brand-name">Plagiarism-Free Essays For You</div>
                  </h4>
                <h6 className="para">
                We ensurethat each writing piece you get is entirely original. The essays written by Assignment Writing Services experts are always checked with anti-plagiarism software to ensure plagiarism-free work. We provide the best essay writing service available online!
                </h6>
                <h6>
                 <div className="para plagp">So Don't Hesitate To Reach Out For Help With Your Essays!</div>
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

export default Plagiarism;