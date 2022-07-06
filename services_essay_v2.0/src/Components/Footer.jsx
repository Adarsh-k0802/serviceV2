import React from "react";
import Foot from "../Images/Logo2.svg";

const Footer=()=>{

    return(
<>

<div class="footer">
<div className="footin">
<ul>
<li>
<img src={Foot} alt=""/>
</li>
<li>
<p className="footp">Assignment Cure - The One Stop<br/> Solution for all your Assignment-<br/>related problems!</p>
</li>
<li>
<h4>Follow Us:</h4>
</li>
<li>
<i class="fa-brands fa-facebook footicon"></i>
<i class="fa-brands fa-instagram footicon"></i>
<i class="fa-brands fa-whatsapp footicon"></i>
<i class="fa-brands fa-linkedin footicon"></i>
</li>
</ul>
</div>
<div className="footin">

<ul>
<h4>Quick Links:</h4>
<li>About Us</li>
<li>Order Now</li>
<li>contact us</li>
<li>Blogs</li>
</ul>
</div>
<div className="footin">

<ul>
<h4>Suport</h4>
<li>FAQs</li>
<li>Policies</li>
<li>Terms & Condition</li>

</ul>
</div>
<div className="footin">

<ul>
<h4>Get In Touch:</h4>
<li>Email:  <a href="to:contact@email.com">contact@email.com</a></li>
<li>Phone:  <a href="tel:+911234567890">911234567890</a></li>

<li>
<h4 className="cardf">We Accept:</h4>
</li>
<li>
<i class="fa-brands fa-cc-mastercard footicon"></i>
<i class="fa-brands fa-cc-amex footicon"></i>
<i class="fa-brands fa-cc-visa footicon"></i>
<i class="fa-brands fa-cc-jcb footicon"></i>
</li>

</ul>
</div>
</div>
<div class="footer1">
<p>Copyright © Assignment Writing Services. All rights reserved.</p>
</div>


</>

    );

};

export default Footer;