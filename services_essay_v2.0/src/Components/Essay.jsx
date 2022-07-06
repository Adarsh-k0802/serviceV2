import React from "react";
import Card from "./Ecard/Card";
import Card2 from "./Ecard/Card2";


const Essay=()=>{

    return(
        <>

<div className="container-fluid bckcolor serpad1 padb ">
        <div className="my-5 ">
        <h3 className="text-center headSer">Our Essay Writing Services</h3>
      </div>

      <div className="container-fluid  ">
        <div className="row">
          <div className="col-6 mx-auto">
            <p className="serPara">
            We have meticulously designed a system where you can easily browse through and select the specific kind of essay or paper for which you need help.
            </p>
            </div>
            </div>
            </div>

         


            <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3">
             {
                <>
                     <Card/>
                     <Card2/>
                    
                     </>

             }

                </div>
              </div>
            </div>
          </div>



        </div>
        </>
    );
};

export default Essay;