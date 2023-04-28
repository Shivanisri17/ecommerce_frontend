import React from "react";

const Signup = () => {
    return (
        <div>


            <button type="button" className="btn btn-outline-dark primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className="fa fa-user-plus me-1"></i> Register
            </button>

            <div className="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-3" id="exampleModalLabel">Register</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-outline-dark primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> SignUp with Google
                            </button>
                            <button className="btn btn-outline-dark primary w-100 mb-2">
                                <span className="fa fa-facebook me-2"></span> SignUp with Facebook
                            </button>
                            <form>
                            <div className="mb-3">
                                    <label htmlfor="exampleInput" className="form-label">
                                    Username</label>
                                    <input type="email" className="form-con" id="exampleInput"
                                     aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-con" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-con" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input2" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">You agree to our Terms and Privary Policy</label>
                                </div>
                                <button type="submit" className="btn btn-outline-dark primary mt-2">Register</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    )
}

export default Signup;