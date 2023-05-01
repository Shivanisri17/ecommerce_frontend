import React from "react";


const Login = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className="fa fa-sign-in me-1"></span> Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-outline-dark w-100 mb-4">
                               <span className="fa fa-google me-2"></span> Sign in With Google
                            </button>
                            <button className="btn btn-outline-dark w-100 mb-4">
                               <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-con" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        
  </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-con" id="exampleInputPassword1"/>
  </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input1" id="exampleCheck1"/>
                                                <label className="form-check-label1" htmlFor="exampleCheck1">RememberMe?</label>
                                                <label className="form-check-label" htmlFor="exampleCheck1"> Forgot Password</label>
  </div>
                                            <button type="submit" className="btn btn-outline-dark mt-2">Submit</button>
</form>
                                    </div>
                                </div>
                </div>
                        </div>
        </>
                    )
}

                    export default Login
       
       