import React from "react";
import Pic from "../Images/Logo.svg";


const Navbar=()=>{

return(
    <>
    
<div >
        <div className="row">
          <div className="col-12 mx-auto">


    <nav className="navbar navbar-expand-lg bg-light navfull">
  <div className="container-fluid">
    <img src={Pic} alt="logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

        
      <ul className="navbar-nav  mb-2 mb-lg-0 navbox ">
        
        <li className="nav-item dropdown navcomp">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Services
          </a>    
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Service 1</a></li>
            <li><a className="dropdown-item" href="#">Service 2</a></li>
          </ul>
          </li>
          <li className="nav-item navcomp">
          <a className="nav-link active" aria-current="page" href="#">Writers</a>
        </li>
        <li className="nav-item navcomp">
          <a className="nav-link active" aria-current="page" href="#">Writing Tools</a>
        </li>
        <li className="nav-item navcomp">
          <a className="nav-link active" aria-current="page" href="#">Blogs</a>
        </li>
        <li className="nav-item navcomp">
          <a className="nav-link active" aria-current="page" href="#">Reviews</a>
        </li>
        
        <li className="nav-item dropdown navcomp">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           About Us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">About Us 1</a></li>
            <li><a className="dropdown-item" href="#">About Us 2</a></li>
          </ul>
        </li>
        <li className="nav-item navcomp">
        <button type="button" class="btn btn-primary btnQuote">Hire an Expert</button>
        </li>
        <li className="nav-item navcomp">
        <button type="button" class="btn btn-outline-primary btncolor">Login</button>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

</div>
</div>
</div>


    
    </>
)


}

export default Navbar;