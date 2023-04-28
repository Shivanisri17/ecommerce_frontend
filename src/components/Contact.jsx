import React from "react";
import Footer from "./Footer";


const Contact = () => {
    return(
        <div>
        <div className="container mb-5 py-4 my-3">
    <div className="row">
        <div className="col-12 text-center py-4 my-4">
           <h1>Leave a Message</h1>
           <hr />
            <h2 className=" py-3 my-3"> 
    We Love to hear from you!
            </h2>
 </div>
</div>
<div className="row">
    <div className="col-md 5 d-flex justify-content-center">
        <img src="/assest/1.png" alt="" height={400} width={400}/>
    </div>
    <div className="col-md-6">
<form>
<div className="mb-3">
  <label for="exampleForm" className="form-label">Full Name</label>
  <input type="email" className="form-con" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-con" id="exampleFormControlInput1" placeholder="name@gmail.com"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-con" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<button type="submit" className="btn btn-outline-dark"> Send</button>
</form>
    </div>
</div >
</div>
&nbsp;
&nbsp;
<Footer />
        </div>
    )
}


export default Contact;