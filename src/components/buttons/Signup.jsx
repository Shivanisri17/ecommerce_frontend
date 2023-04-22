import React from "react";

const Signup = () => {
    return (
        <div>


            <button type="button" class="btn btn-outline-dark primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className="fa fa-user-plus me-1"></i> Register
            </button>

            <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-3" id="exampleModalLabel">Register</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <button className="btn btn-outline-dark primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> SignUp with Google
                            </button>
                            <button className="btn btn-outline-dark primary w-100 mb-2">
                                <span className="fa fa-facebook me-2"></span> SignUp with Facebook
                            </button>
                            <form>
                            <div class="mb-3">
                                    <label htmlfor="exampleInput" class="form-label">
                                    Username</label>
                                    <input type="email" class="form-con" id="exampleInput"
                                     aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-con" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-con" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input1" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">You agree to our Terms and Privary Policy</label>
                                </div>
                                <button type="submit" class="btn btn-outline-dark primary">Register</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    )
}

export default Signup;