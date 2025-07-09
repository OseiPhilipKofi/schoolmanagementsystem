import { Link } from "react-router-dom";

const Authentication = () => {
    return (
        <>

            <div class="formWrapper pt-5">
                <div class="loginWrapper" id="loginWrapper">
                    <form action="#" method="post" id="loginForm">
                        <h3 class="headLabel mb-2">login</h3>
                        <div class="messages">
                            <div class="errMessage" id="errMessage1"></div>
                            <div class="sucMessage" id="sucMessage1"></div>
                        </div>
                        <div class="eachInput">
                            <input type="text" name="nameEmail" id="nameEmail" placeholder="Enter username or email" />
                        </div>
                        <div class="eachInput">
                            <input type="password" name="userPassword" id="userPassword" placeholder="Enter password" />
                            <div class="showPass">
                                <label for="checkInput">show password</label>
                                <input type="checkbox" name="checkInput" id="checkInput" class="checkInput" />
                            </div>
                        </div>
                        <div class="btns">
                            <input type="submit" name="login" id="loginUser" value="login Now" class="btn loginUser" />
                            <input type="submit" name="" id="signinUser" value="Register" class="btn signinUser" />
                        </div>

                        <div class="forgotWrap">
                            <i class="fa-solid fa-lock"></i>
                            <p> <Link href="/reset-password" class="word-no-wrap">Forgotten password ? </Link> </p>
                        </div>

                    </form>
                </div>



                <div class="signinWrapper" id="signinWrapper" style="display: none;">

                    <form action="#" method="post" id="signinForm">
                        <div class="headLabel"><h2>Sign Up</h2></div>
                        <div class="messages">
                            <div class="errMessage" id="errMessage2"></div>
                            <div class="sucMessage" id="sucMessage2"></div>
                        </div>
                        <div class="formBodyWrap">

                            <div class="eachInput">
                                <input type="text" name="sFName" id="sFName" placeholder="Enter full name" />
                            </div>
                            <div class="eachInput">
                                <input type="email" name="sEmail" id="sEmail" placeholder="Enter email" />
                            </div>

                            <div class="eachInput">
                                <input type="phone" name="contact" id="contact" placeholder="Enter your phone number" />
                            </div>
                            <div class="eachInput">
                                <input type="password" name="sPassword" id="sPassword" placeholder="Create new password" />
                                <div class="eachInput" id="cPassWrapper">
                                    <div class="passStrenght">
                                        <p class="passStrength2" id="passStrength2"></p>
                                    </div>
                                    <input type="password" name="cPassword" id="cPassword" placeholder="Comfirm password" />
                                </div>
                                <div class="showPass">
                                    <label for="checkInput2">show password</label>
                                    <input type="checkbox" name="checkInput2" id="checkInput2" class="checkInput" />
                                </div>
                            </div>
                        </div>
                        <div class="google-login">
                            <p class="text-center">or</p>
                            <div onclick="" class="google-btn d-flex flex-row justify-content-center align-items-center gap-10">
                                <i class="fa-brands fa-google"></i>
                                <span class="text-capitalize">Sign up with Google</span>
                            </div>
                        </div>
                        <div class="btns">
                            <input type="submit" name="login" id="registerUser" value="Register" class="btn loginUser" />
                            <input type="submit" name="" id="loginUser2" value="login Now" class="btn signinUser" />
                        </div>
                    </form>

                </div>
            </div>
        </>
     );
}

export default Authentication;