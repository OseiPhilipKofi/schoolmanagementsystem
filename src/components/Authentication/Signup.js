import { Link } from "react-router-dom";
import './css/login.css';
import googleImg from '../../utility/icons-svgs/google-sm.png';

const Signup = () => {
    function signUpAuthentication(){}
    return (
        <>
            <div className="formWrapper">

                <div className="signinWrapper" id="signinWrapper">

                    <form action="#" method="post" id="signinForm">
                        <h3 className="headLabel mb-2">Signup</h3>
                        <div className="messages">
                            <div className="errMessage" id="errMessage2"></div>
                            <div className="sucMessage" id="sucMessage2"></div>
                        </div>
                        <div className="formBodyWrap">

                            <div className="eachInput">
                                <input type="text" name="sFName" id="sFName" placeholder="Enter full name" />
                            </div>
                            <div className="eachInput">
                                <input type="email" name="sEmail" id="sEmail" placeholder="Enter email" />
                            </div>

                            <div className="eachInput">
                                <input type="phone" name="contact" id="contact" placeholder="Enter your phone number" />
                            </div>
                            <div className="eachInput">
                                <input type="password" name="sPassword" id="sPassword" placeholder="Create new password" />
                                <div className="eachInput" id="cPassWrapper">
                                    <div className="passStrenght">
                                        <p className="passStrength2" id="passStrength2"></p>
                                    </div>
                                    <input type="password" name="cPassword" id="cPassword" placeholder="Comfirm password" />
                                </div>
                                <div className="showPass">
                                    <span className="">
                                        <label htmlFor="checkInput2">show password</label>
                                    </span>
                                    <span className="">
                                        <input type="checkbox" name="checkInput2" id="checkInput2" className="checkInput" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="btns">
                            <input type="submit" name="login" id="registerUser" value="Register" className="btn loginUser" />
                            <Link to='/login' >
                                <input type="submit" name="" id="loginUser2" value="login Now" className="btn signinUser w-100" />
                            </Link>
                        </div>

                        <div className="google-login glog">
                            <p className="text-center">or</p>
                            <div onClick={ signUpAuthentication } className="google-btn pointer authbtnmain m-auto d-flex flex-row justify-content-center align-items-center gap-10">
                                <img className="google-icon" src={ googleImg } />
                                <span className="text-capitalize">Sign up with Google</span>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
     );
}

export default Signup;