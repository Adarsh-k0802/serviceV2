import React from "react";
import Web from "../Accordion/faq.svg";
import "../Accordion/Accordion.css";
import {useState} from 'react';
import Uparrow from "../Accordion/uparrow.svg";
import Downarrow from "../Accordion/downarrow.svg";

const Accordion=()=>{


    const [selected, setSelected]= useState(null)

    const toggle=(i)=>{
        
        if (selected == i){
            return setSelected(null)
        }

        setSelected(i)
    }

    return(
        <>



         <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid nav_bg accorback">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="my-5 ">
        <h3 className="text-center headSer">Frequently Asked Questions</h3>
      </div>
     
              <div className="row">
                <div className="col-md-7 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                

                
                <div className="wrapper">
      
      <div className="accordion">

        {data.map((item,i)=>(
            <div className="item">
                <div className="title" onClick={()=>toggle(i)}>
                    <h2 className="titlesize">{item.question}</h2>
                    <span><img src ={selected===i ?Uparrow:Downarrow}/></span>
                    </div>
                    <div className={selected===i ? 'content.show':'content'}>{item.answer}</div>
                    </div>
        ))}
      </div>


        </div>





                </div>

                <div className="col-lg-5 order-1 order-lg-2 header-img">
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
    );
};

const data=[
    {
        question:"What is the cost of the Assignment Writing Services' essay help service?",
        answer:"The prices can vary depending on the length of the paper and the deadlines but rest assured, you can buy an assignment online at cost-effective prices.",
    },
    {
        question:"Who will be helping me in writing my essay?",
        answer:"The prices can vary depending on the length of the paper and the deadlines but rest assured, you can buy an assignment online at cost-effective prices.",
    },
    {
        question:"What other services do you offer at Assignment Writing Services?",
        answer:"The prices can vary depending on the length of the paper and the deadlines but rest assured, you can buy an assignment online at cost-effective prices.",
    },
    {
        question:"Is it right to get help in writing my essays?",
        answer:"The prices can vary depending on the length of the paper and the deadlines but rest assured, you can buy an assignment online at cost-effective prices.",
    },
]

export default Accordion;