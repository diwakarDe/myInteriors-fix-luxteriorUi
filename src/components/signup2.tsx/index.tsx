import React from "react"
import { Container } from "react-bootstrap"
interface signUpProps { }
import './signup.css'
import googleimage from "../../img/googlelogo.png"
import manworking from "../../img/manworking.png"

const Signup = (props: signUpProps) => {
    return (
        <>
            <Container >
                <section className="form">
                <div className="form-heading">
                            <h3>Create an Account</h3>
                        </div>
                    <div className="signin-form">
                        <div className="form-content">
                            {/* <div className="google-button">
                                <img src={googleimage} /><span className="button-text">Sign in with google</span>
                            </div> */}
                            <div className="phonenumber">
                                <h3>Phone Number</h3>
                                <input type="text" name="number-or-email" id="number-or-email" placeholder="Mobile"></input>
                            </div>
                            <div className="emailform">
                                <h3>Email</h3>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="passwordform">
                                <h3>Password</h3>
                                <input type="password" id="pwd" name="pwd"></input>
                            </div>
                            <div className="emailform">
                                <h3>Region</h3>
                                <input type="text" placeholder="Region" />
                            </div>
                            <div className="signup">
                                <a href="#" className="signbutton">Login</a>
                            </div>
                        </div>
                        <div className="signup-image">
                            <img src={manworking} />
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Signup
