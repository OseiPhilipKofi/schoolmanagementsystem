import { Link } from "react-router-dom";
import './css/login.css';
import googleImg from '../../utility/icons-svgs/google-sm.png';
const Login = () => {
    function loginAuthentication(){}
    return (
        <>
            <div className="formWrapper">

                <div className="loginWrapper" id="loginWrapper">
                    <form action="#" method="post" id="loginForm">
                        <h3 className="headLabel mb-2">login</h3>
                        <div className="messages">
                            <div className="errMessage" id="errMessage1"></div>
                            <div className="sucMessage" id="sucMessage1"></div>
                        </div>
                        <div className="eachInput">
                            <input type="text" name="nameEmail" id="nameEmail" placeholder="Enter username or email" />
                        </div>
                        <div className="eachInput">
                            <input type="password" name="userPassword" id="userPassword" placeholder="Enter password" />
                            <div className="showPass">
                                <span className="">
                                    <label htmlFor="checkInput">show password</label>
                                </span>
                                <span className="">
                                    <input type="checkbox" name="checkInput" id="checkInput" className="checkInput" />
                                </span>
                            </div>
                        </div>

                        <div className="btns">
                            <input type="submit" name="login" id="loginUser" value="login Now" className="btn loginUser" />
                            <Link to="/signup" >
                                <input type="submit" name="" id="signinUser" value="Register" className="btn signinUser" />
                            </Link>
                        </div>

                        <div className="forgotWrap">
                            <i className="fa-solid fa-lock"></i>
                            <p> <Link href="/reset-password" className="word-no-wrap">Forgotten password ? </Link> </p>
                        </div>

                        <div className="google-login mt-10">
                            <p className="text-center">or</p>
                            <div onClick={ loginAuthentication } className="google-btn pointer authbtnmain m-auto d-flex flex-row justify-content-center align-items-center gap-10">
                                <img className="google-icon" src={ googleImg } />
                                <span className="text-capitalize">Login with Google</span>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </>
     );
}

export default Login;