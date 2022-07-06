import React from "react";
import Grad from "../Ecard/Graduation_Cap.svg"




const Card = () => {
  return (
    <>
      
              <div className="col-md-3 col-10 mx-auto ">
                <div className="card carmar Cbox1 ">
                
                  <div className="card-body ">
                <span className="isize"> <img src={Grad}/></span>
                    <h5 className="card-title ititle">College Application Essay</h5>
                    <p className="card-text pc1">
                    A list of academic and extracurricular achievements, work experience, and skills is not enough. Buy an assignment online so that our team of experts can craft an eloquent and engaging essay to help you get to the college of your dreams.
                    </p>
                    
                  </div>
                </div>
              </div>
            
         
    </>
  );
};

export default Card;
