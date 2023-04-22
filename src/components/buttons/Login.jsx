import React from "react";


const Login = () => {
    return (
        <>

            <button type="button" class="btn btn-outline-dark primary" data-bs-toggle="modal" data-bs-target="#loginModal">
            <i className="fa fa-sign-in me-1 "></i> Login  
            </button>

              <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-3" id="exampleModalLabel">Login</h1>
                            <button type="button" class="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                         <button className="btn btn-outline-dark primary w-100 mb-4">
                            <span className="fa fa-google me-2"></span> SignIn with Google
                         </button>

                         <button className="btn btn-outline-dark primary w-100 mb-2">
                            <span className="fa fa-facebook me-2"></span> SignIn with Facebook
                         </button>


                            <form>
                               
                                <div class="mb-3">
                                    <label htmlfor="exampleInput" class="form-label">
                                    Email address</label>
                                   
                                    <input type="email" class="form-con"id="exampleInput"
                                     aria-describedby="emailHelp" /> 

                                    <div id="emailHelp" class="form-text">
                                    We'll never share your email with anyone else.</div>
                                </div>



                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-con" id="exampleInputPassword1" />

                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input1" id="exampleCheck" />
                                    <label class="form-check-label " for="exampleCheck">Remember Me</label>
                                    <label class="form-check-label1" for="exampleCheck">Forgot Password?</label>
                                </div>
                                <button type="submit" class="btn btn-outline-dark primary">Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login;